import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-extras-question-card',
  templateUrl: './extras-question-card.component.html',
  styleUrls: ['./extras-question-card.component.scss']
})
export class ExtrasQuestionCardComponent implements OnInit {

  exit: boolean;
  @Output() hitNext = new EventEmitter<any>();
  extras: any = {
    wheelchair: false,
    restroom: false,
    open_to_all: false
  };

  constructor() { }

  ngOnInit(): void {
  }


  next() {
    this.exit = true;
    this.hitNext.emit(this.extras);
  }
}
