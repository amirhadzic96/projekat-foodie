import {Component, Input} from '@angular/core';
import {IngredientList} from 'src/app/interface/ingredientList';
import {ShoppingList} from '../../../interface/shoppingList';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  @Input()
  ingredientListModel: IngredientList[];

  @Input()
  shoppingListsModel: ShoppingList[];
}
