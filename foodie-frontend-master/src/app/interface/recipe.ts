import {IngredientList} from './ingredientList';
import {NutritionIssue} from './nutritionIssue';

export interface Recipe {
  id?: number;
  title: string;
  preparation: string;
  numOfCalories: number;
  typeOfMeal: number;
  calorieStatus: number;
  preparationTime: number;
  count: number;
  thumbnailImageUrl: string;
  mainImageUrl: string;
  ingredientList: IngredientList[];
  nutritionIssues: NutritionIssue[];
}
