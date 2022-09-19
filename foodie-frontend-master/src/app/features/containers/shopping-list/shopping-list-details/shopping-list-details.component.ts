import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../../../../interface/shoppingList';
import {ActivatedRoute, Router} from '@angular/router';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ShoppingListService} from '../../../../services/shoppingList.service';
import {Ingredient} from '../../../../interface/ingredient';
import {AuthService} from '../../../auth/shared/auth.service';

@Component({
  selector: 'app-shopping-list-details',
  templateUrl: './shopping-list-details.component.html',
  styleUrls: ['./shopping-list-details.component.css']
})
export class ShoppingListDetailsComponent implements OnInit {

  shoppingList: ShoppingList;

  faTrashAlt = faTrashAlt;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private shoppingListService: ShoppingListService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.shoppingList = routeData.shoppingList;
    });
  }

  onDelete(shoppingListId: number, ingredient: Ingredient): void {
    if (confirm(`Are you sure you want to delete ${ingredient.ingredientName} ?`)) {
      this.shoppingList.ingredients = this.shoppingList.ingredients.filter(el => {
        return ingredient.id !== el.id;
      });
      this.shoppingListService.updateShoppingList(shoppingListId, this.shoppingList).subscribe(() => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([`/shopping-lists/${this.shoppingList.id}`]);
        });
      });
    }
  }
}
