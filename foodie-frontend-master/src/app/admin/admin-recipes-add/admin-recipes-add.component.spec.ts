import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipesAddComponent } from './admin-recipes-add.component';

describe('AdminRecipesAddComponent', () => {
  let component: AdminRecipesAddComponent;
  let fixture: ComponentFixture<AdminRecipesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecipesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
