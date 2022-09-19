import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Recipe} from '../interface/recipe';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {

  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> {
    return this.recipeService.getRecipe(route.paramMap.get('id'));
  }
}
