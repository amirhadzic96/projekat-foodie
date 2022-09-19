import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Ingredient} from '../interface/ingredient';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  apiUrl: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredients`);
  }

  getIngredient(id: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.apiUrl}/ingredients/${id}`);
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiUrl}/admin/ingredients`, ingredient);
  }

  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.apiUrl}/admin/ingredients/${id}`, ingredient);
  }

  deleteIngredient(id: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(`${this.apiUrl}/admin/ingredients/${id}`);
  }
}
