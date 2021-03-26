import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuestionCardComponent } from './price-question-card.component';

describe('PriceQuestionCardComponent', () => {
  let component: PriceQuestionCardComponent;
  let fixture: ComponentFixture<PriceQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceQuestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
