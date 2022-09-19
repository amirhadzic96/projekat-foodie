import {Recipe} from './recipe';
import {User} from './user';

export class DailyMealPlan {
  id: number;
  date: Date;
  breakfast: Recipe;
  lunch: Recipe;
  dinner: Recipe;
  user: User;
}
