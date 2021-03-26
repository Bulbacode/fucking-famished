import { Options } from '@angular-slider/ngx-slider/options';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-urgent-question-card',
  templateUrl: './urgent-question-card.component.html',
  styleUrls: ['./urgent-question-card.component.scss']
})
export class UrgentQuestionCardComponent implements OnInit {
  
  exit: boolean = false;
  @Output() hitNext = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  next(isUrgent: boolean) {
    this.exit = true;
    this.hitNext.emit(isUrgent);
  }
}
