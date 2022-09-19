import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListsComponent } from './ingredient-lists.component';

describe('IngredientListsComponent', () => {
  let component: IngredientListsComponent;
  let fixture: ComponentFixture<IngredientListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
