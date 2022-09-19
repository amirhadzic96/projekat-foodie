import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ShoppingList} from '../interface/shoppingList';
import {AuthService} from '../features/auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  apiUrl: string = environment.api;
  userId: number;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getId();
  }

  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(`${this.apiUrl}/shopping-list/${this.userId}`);
  }

  getShoppingList(id: string): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}/${id}`);
  }

  createShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}`, shoppingList);
  }

  updateShoppingList(id: number, shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.http.put<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}/${id}`, shoppingList);
  }

  deleteShoppingList(id: number): Observable<ShoppingList> {
    return this.http.delete<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}/${id}`);
  }
}
