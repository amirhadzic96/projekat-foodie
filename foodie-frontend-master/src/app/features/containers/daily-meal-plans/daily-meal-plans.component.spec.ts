import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealPlansComponent } from './daily-meal-plans.component';

describe('DailyMealPlansComponent', () => {
  let component: DailyMealPlansComponent;
  let fixture: ComponentFixture<DailyMealPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMealPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMealPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
