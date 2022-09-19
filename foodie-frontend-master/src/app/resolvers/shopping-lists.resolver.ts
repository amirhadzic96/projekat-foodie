import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ShoppingList} from '../interface/shoppingList';
import {ShoppingListService} from '../services/shoppingList.service';

@Injectable()
export class ShoppingListsResolver implements Resolve<ShoppingList[]> {

  constructor(private shoppingListService: ShoppingListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingList[]> {
    return this.shoppingListService.getShoppingLists();
  }
}
