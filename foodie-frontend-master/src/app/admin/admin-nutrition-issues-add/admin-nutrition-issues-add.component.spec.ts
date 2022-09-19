import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNutritionIssuesAddComponent } from './admin-nutrition-issues-add.component';

describe('AdminNutritionIssuesAddComponent', () => {
  let component: AdminNutritionIssuesAddComponent;
  let fixture: ComponentFixture<AdminNutritionIssuesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNutritionIssuesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNutritionIssuesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
