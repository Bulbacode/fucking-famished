import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price-question-card',
  templateUrl: './price-question-card.component.html',
  styleUrls: ['./price-question-card.component.scss']
})
export class PriceQuestionCardComponent implements OnInit {

  @Output() hitNext = new EventEmitter<any>();
  exit: boolean = false;
  low: boolean;
  mid: boolean;
  high: boolean;
  vhigh: boolean;
  price: number[];
  
  constructor() {
    this.price = [];
  }

  ngOnInit(): void {
  }

  next() {

    if (this.low) {
      this.price.push(1);
    }
    if (this.mid) {
      this.price.push(2);
    }
    if (this.high) {
      this.price.push(3);
    }
    if (this.vhigh) {
      this.price.push(4);
    }

    console.log(this.price);

    this.exit = true;
    this.hitNext.emit(this.price);
  }
}
