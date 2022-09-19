import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from '../interface/recipe';
import {AuthService} from '../features/auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipeService {

  apiUrl: string = environment.api;
  userId: number;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getId();
  }

  getFavoriteRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/favorite-recipes/${this.userId}`);
  }

  addToFavoriteRecipe(rId: string): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/favorite-recipes/${this.userId}/${rId}`, null);
  }

  removeFromFavorite(recipeId: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/favorite-recipes/${this.userId}/${recipeId}`);
  }
}
