import { Options } from '@angular-slider/ngx-slider';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-distance-question-card',
  templateUrl: './distance-question-card.component.html',
  styleUrls: ['./distance-question-card.component.scss']
})
export class DistanceQuestionCardComponent implements OnInit, AfterViewInit {

  @Output() hitNext = new EventEmitter<any>();
  manualRefreshEnabled: boolean = true;
  manualRefresh: EventEmitter<void> = new EventEmitter<void>();
  miles: boolean = true;
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 25,
  };

  exit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.manualRefresh.emit();
  }

  toggle(): void {
    // Due to change detection rules in Angular, we need to re-create the options object to apply the change
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.ceil = this.options.ceil == 25 ? 40 : 25;
    this.miles = !this.miles;
    this.options = newOptions;
    console.log(this.value);
  }

  next() {
    this.exit = true;

    this.hitNext.emit(this.miles == true ? this.getMiles(this.value) : (this.value * 1000));
  }

  getMiles(num: number) {
    num = Math.floor(num / 0.00062137);
    if (num > 40000) { num = 40000; }
    
    console.log(`Miles in Meters - ${num}`);

    return num;
  }
}
