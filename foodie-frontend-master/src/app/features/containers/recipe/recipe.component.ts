import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../interface/recipe';
import {IngredientList} from 'src/app/interface/ingredientList';
import {NutritionIssue} from 'src/app/interface/nutritionIssue';
import {ShoppingList} from '../../../interface/shoppingList';
import {FavoriteRecipeService} from 'src/app/services/favorite-recipe.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  ingredientsList: IngredientList[] = [];
  nutritionIssues: NutritionIssue[] = [];
  shoppingListsModel: ShoppingList[];
  isFavorite: boolean;
  isFavoriteMessage: string;

  constructor(private route: ActivatedRoute,
              private favoriteRecipeService: FavoriteRecipeService,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.recipe = routeData.recipe;
      this.ingredientsList = routeData.recipe.ingredientList;
      this.nutritionIssues = routeData.recipe.nutritionIssues;
      this.titleService.setTitle(this.recipe.title + ' | Foodie');
    });

    this.route.data.subscribe(routeData => {
      this.shoppingListsModel = routeData.shoppingLists;
    });
    this.route.queryParams
      .subscribe(params => {
        if (params.addedToFavorites !== undefined && params.addedToFavorites === 'true') {
          this.isFavoriteMessage = 'Successfully added to favorite recipes collection on your Profile page!';
          this.isFavorite = true;
        }
      });
  }

  onAdd(): void {
    this.favoriteRecipeService.addToFavoriteRecipe(this.recipe.id + '').subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/recipes/${this.recipe.id}`], {queryParams: {addedToFavorites: 'true'}});
    });
  }

  onRemove(id: number): void {
    if (confirm(`Are you sure you want to remove this recipe from favorites?`)) {
      this.favoriteRecipeService.removeFromFavorite(id).subscribe(() => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/recipes/' + this.recipe.id]);
        });
      });
    }
  }
}
