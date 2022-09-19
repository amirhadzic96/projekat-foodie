import {Ingredient} from './ingredient';
import {User} from './user';

export interface ShoppingList {
  id?: number;
  title: string;
  userId?: number;
  user?: User;
  ingredients: Ingredient[];
}
