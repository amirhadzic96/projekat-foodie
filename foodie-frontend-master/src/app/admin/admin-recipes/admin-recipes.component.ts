import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../interface/recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {RecipeService} from '../../services/recipe.service';
import {Title} from '@angular/platform-browser';
import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {
  recipes: Recipe[];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  typeOfMeal = TypeOfMeal;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Recipes | Foodie');
    this.activatedRoute.data.subscribe((routeData: { recipes: Recipe[] }) => {
      this.recipes = routeData.recipes;
    });
  }

  openAddRecipe(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_NEW}`);
  }

  openEditRecipe(id: number): void {
    this.router.navigateByUrl(`/admin/recipes/edit/${id}`);
  }

  deleteRecipe(recipe: Recipe): void {
    if (confirm(`Are you sure you want to delete "${recipe.title}" ?`)) {
      this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([`/${RoutesConstant.ADMIN_RECIPES_LIST}`]);
        });
      });
    }
  }
}
