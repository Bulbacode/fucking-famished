import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentQuestionCardComponent } from './urgent-question-card.component';

describe('UrgentQuestionCardComponent', () => {
  let component: UrgentQuestionCardComponent;
  let fixture: ComponentFixture<UrgentQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentQuestionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
