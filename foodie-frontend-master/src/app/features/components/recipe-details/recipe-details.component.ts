import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../../interface/recipe';
import {IngredientList} from '../../../interface/ingredientList';
import {TypeOfMeal} from 'src/app/interface/enums/typeOfMeal';
import {NutritionIssue} from 'src/app/interface/nutritionIssue';
import {ShoppingList} from '../../../interface/shoppingList';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input()
  model: Recipe;

  typeOfMeal = TypeOfMeal;

  @Input()
  ingredientModel: IngredientList[];

  @Input()
  nutritionIssues: NutritionIssue[];

  @Input()
  shoppingListsModel: ShoppingList[];

  @Input()
  isFavoriteMessage: string;

  @Input()
  isFavorite: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onAdd = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onRemove = new EventEmitter();

  addToFavorite(): void {
    this.onAdd.emit();
  }

  removeFromFavorite(): void {
    this.onRemove.emit(this.model.id);
  }

  onClick(): void {
    const x = document.querySelector('#directions');
    if (x) {
      x.scrollIntoView();
    }
  }
}
