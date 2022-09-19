import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../../../interface/ingredient';
import {ActivatedRoute} from '@angular/router';
import {ShoppingList} from '../../../../interface/shoppingList';
import {IngredientList} from '../../../../interface/ingredientList';
import {ShoppingListService} from '../../../../services/shoppingList.service';

@Component({
  selector: 'app-add-to-shopping-list',
  templateUrl: './add-to-shopping-list.component.html',
  styleUrls: ['./add-to-shopping-list.component.css']
})
export class AddToShoppingListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) {
  }

  // shoppingLists: ShoppingList[] = [];

  shoppingListNumber: number = null;
  ingredientsModel: Ingredient[] = [];

  @Input()
  ingredientList: IngredientList[];

  @Input()
  shoppingListsModel: ShoppingList[];

  removeDuplicates(array): [] {
    const seen = new Set();

    return array.filter(el => {
      const duplicate = seen.has(el.id);
      seen.add(el.id);
      return !duplicate;
    });
  }

  getIndexByShoppingListId(): number {
    return this.shoppingListsModel.findIndex((element) => {
      return element.id === this.shoppingListNumber;
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const shoppingListElement = this.shoppingListsModel[this.getIndexByShoppingListId()];
    shoppingListElement.ingredients = this.removeDuplicates(shoppingListElement.ingredients.concat(this.ingredientsModel));

    this.shoppingListService.updateShoppingList(this.shoppingListNumber, shoppingListElement).subscribe(() => {

      const element = document.getElementById('closeShoppingListModal');
      element.setAttribute('data-dismiss', 'modal');
      element.click();

      this.shoppingListNumber = null;
      this.ingredientsModel = [];
    });
  }

}
