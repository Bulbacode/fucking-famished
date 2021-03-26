import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceQuestionCardComponent } from './distance-question-card.component';

describe('DistanceQuestionCardComponent', () => {
  let component: DistanceQuestionCardComponent;
  let fixture: ComponentFixture<DistanceQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceQuestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
