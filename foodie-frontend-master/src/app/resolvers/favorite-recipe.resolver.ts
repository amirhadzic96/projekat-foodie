import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Recipe} from '../interface/recipe';
import {FavoriteRecipeService} from '../services/favorite-recipe.service';

@Injectable()
export class FavoriteRecipeResolver implements Resolve<Recipe[]> {

  constructor(private favoriteRecipeService: FavoriteRecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    return this.favoriteRecipeService.getFavoriteRecipes();
  }

}
