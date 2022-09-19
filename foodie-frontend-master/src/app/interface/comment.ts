import {Recipe} from './recipe';
import {User} from './user';

export interface Comment {
  id?: number;
  comment: string;
  datetime: Date;
  user: User;
  recipe: Recipe;
}
