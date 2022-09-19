import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../interface/ingredient';
import {RoutesConstant} from '../../constants/routes-constant';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {IngredientService} from '../../services/ingredient.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './admin-ingredients.component.html',
  styleUrls: ['./admin-ingredients.component.css']
})
export class AdminIngredientsComponent implements OnInit {

  ingredients: Ingredient[];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private ingredientsService: IngredientService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Ingredients | Foodie');
    this.activatedRoute.data.subscribe((routeData: { ingredients: Ingredient[] }) => {
      this.ingredients = routeData.ingredients;
    });
  }

  openAddIngredients(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_NEW}`);
  }

  openEditIngredient(id: number): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_BASE}/edit/${id}`);
  }

  deleteIngredient(ingredient: Ingredient): void {
    if (confirm(`Are you sure you want to delete "${ingredient.ingredientName}" ?`)) {
      this.ingredientsService.deleteIngredient(ingredient.id).subscribe(() => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([`/${RoutesConstant.ADMIN_INGREDIENTS_LIST}`]);
        });
      });
    }
  }
}
