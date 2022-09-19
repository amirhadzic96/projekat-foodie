import {Component, OnInit} from '@angular/core';
import {TypeOfMeal} from '../../interface/enums/typeOfMeal';
import {CalorieStatus} from '../../interface/enums/calorieStatus';
import {NutritionIssue} from '../../interface/nutritionIssue';
import {Ingredient} from '../../interface/ingredient';
import {IngredientList} from '../../interface/ingredientList';
import {Recipe} from '../../interface/recipe';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-recipes-edit',
  templateUrl: './admin-recipes-edit.component.html',
  styleUrls: ['./admin-recipes-edit.component.css']
})
export class AdminRecipesEditComponent implements OnInit {
  typeOfMeal = TypeOfMeal;
  calorieStatus = CalorieStatus;
  faTrashAlt = faTrashAlt;

  recipe: Recipe;

  nutritionIssues: NutritionIssue[];
  ingredients: Ingredient[];

  ingredientLists: IngredientList[] = [];
  ingredientList: IngredientList = {ingredient: undefined, amount: 0, amountLabel: ''};

  recipeModel: Recipe = {
    ingredientList: this.ingredientLists,
    nutritionIssues: undefined,
    numOfCalories: 0,
    calorieStatus: 0,
    thumbnailImageUrl: '',
    mainImageUrl: '',
    preparationTime: 0,
    count: 0,
    preparation: '',
    title: '',
    typeOfMeal: 0
  };

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Edit Recipe | Foodie');
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });

    this.activatedRoute.data.subscribe((routeData: { ingredients: Ingredient[] }) => {
      this.ingredients = routeData.ingredients;
    });

    this.activatedRoute.data.subscribe((routeData: { recipe: Recipe }) => {
      this.recipeModel = routeData.recipe;
      this.ingredientLists = this.recipeModel.ingredientList;
    });
  }

  onSubmit(): void {
    this.recipeService.updateRecipe(this.recipeModel.id, this.recipeModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
    });
  }

  addIngredient(): void {
    this.recipeModel.ingredientList.push(this.ingredientList);
    this.ingredientList = {ingredient: undefined, amount: 0, amountLabel: ''};
    this.ingredientLists = this.recipeModel.ingredientList;
  }

  removeIngredientList(ingredientList: IngredientList): void {
    this.recipeModel.ingredientList = this.ingredientLists.filter((element) => {
      return element !== ingredientList;
    });
    this.ingredientLists = this.recipeModel.ingredientList;
  }

}
