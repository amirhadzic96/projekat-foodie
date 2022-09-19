import {Ingredient} from './ingredient';

export interface IngredientList {
  id?: number;
  amount: number;
  amountLabel: string;
  ingredient: Ingredient;
}
