import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNutritionIssuesEditComponent } from './profile-nutrition-issues-edit.component';

describe('ProfileNutritionIssuesEditComponent', () => {
  let component: ProfileNutritionIssuesEditComponent;
  let fixture: ComponentFixture<ProfileNutritionIssuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNutritionIssuesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNutritionIssuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
