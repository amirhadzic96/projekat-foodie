import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipesEditComponent } from './admin-recipes-edit.component';

describe('AdminRecipesEditComponent', () => {
  let component: AdminRecipesEditComponent;
  let fixture: ComponentFixture<AdminRecipesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecipesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
