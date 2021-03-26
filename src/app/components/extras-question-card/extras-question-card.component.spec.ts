import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasQuestionCardComponent } from './extras-question-card.component';

describe('ExtrasQuestionCardComponent', () => {
  let component: ExtrasQuestionCardComponent;
  let fixture: ComponentFixture<ExtrasQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasQuestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
