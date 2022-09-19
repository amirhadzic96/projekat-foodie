import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IngredientService} from '../services/ingredient.service';
import {Ingredient} from '../interface/ingredient';

@Injectable()
export class IngredientsResolver implements Resolve<Ingredient[]> {

  constructor(private ingredientService: IngredientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> {
    return this.ingredientService.getIngredients();
  }
}
