import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNutritionIssuesEditComponent } from './admin-nutrition-issues-edit.component';

describe('AdminNutritionIssuesEditComponent', () => {
  let component: AdminNutritionIssuesEditComponent;
  let fixture: ComponentFixture<AdminNutritionIssuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNutritionIssuesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNutritionIssuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
