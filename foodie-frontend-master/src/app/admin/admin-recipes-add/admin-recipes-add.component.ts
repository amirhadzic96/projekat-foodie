import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../interface/recipe';
import {RoutesConstant} from '../../constants/routes-constant';
import {TypeOfMeal} from '../../interface/enums/typeOfMeal';
import {IngredientList} from '../../interface/ingredientList';
import {Ingredient} from '../../interface/ingredient';
import {NutritionIssue} from '../../interface/nutritionIssue';
import {CalorieStatus} from '../../interface/enums/calorieStatus';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-recipes-add',
  templateUrl: './admin-recipes-add.component.html',
  styleUrls: ['./admin-recipes-add.component.css']
})
export class AdminRecipesAddComponent implements OnInit {
  typeOfMeal = TypeOfMeal;
  calorieStatus = CalorieStatus;
  faTrashAlt = faTrashAlt;

  nutritionIssues: NutritionIssue[];
  ingredients: Ingredient[];

  ingredientLists: IngredientList[] = [];
  ingredientList: IngredientList = {ingredient: undefined, amount: 0, amountLabel: ''};

  recipeModel: Recipe = {
    ingredientList: this.ingredientLists,
    nutritionIssues: undefined,
    numOfCalories: 0,
    calorieStatus: 0,
    preparationTime: 0,
    thumbnailImageUrl: '',
    mainImageUrl: '',
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
    this.titleService.setTitle('Admin: Add Recipe | Foodie');
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });

    this.activatedRoute.data.subscribe((routeData: { ingredients: Ingredient[] }) => {
      this.ingredients = routeData.ingredients;
    });
  }

  onSubmit(): void {
    this.recipeService.createRecipe(this.recipeModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
    });
  }

  addIngredient(): void {
    this.ingredientLists.push(this.ingredientList);
    this.ingredientList = {ingredient: undefined, amount: 0, amountLabel: ''};
  }

  removeIngredientList(ingredientList: IngredientList): void {
    this.recipeModel.ingredientList = this.ingredientLists.filter((element) => {
      return element !== ingredientList;
    });
    this.ingredientLists = this.recipeModel.ingredientList;
  }
}
