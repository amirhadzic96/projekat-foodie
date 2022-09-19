import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientsEditComponent } from './admin-ingredients-edit.component';

describe('AdminIngredientsEditComponent', () => {
  let component: AdminIngredientsEditComponent;
  let fixture: ComponentFixture<AdminIngredientsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIngredientsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIngredientsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
