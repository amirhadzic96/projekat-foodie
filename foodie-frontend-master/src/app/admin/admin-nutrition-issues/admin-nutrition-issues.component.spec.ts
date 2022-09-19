import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNutritionIssuesComponent } from './admin-nutrition-issues.component';

describe('AdminNutritionIssuesComponent', () => {
  let component: AdminNutritionIssuesComponent;
  let fixture: ComponentFixture<AdminNutritionIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNutritionIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNutritionIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
