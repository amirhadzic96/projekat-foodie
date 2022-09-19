import {Component, OnInit} from '@angular/core';
import {RoutesConstant} from '../../constants/routes-constant';
import {Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient.service';
import {Ingredient} from '../../interface/ingredient';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-ingredients-add',
  templateUrl: './admin-ingredients-add.component.html',
  styleUrls: ['./admin-ingredients-add.component.css']
})
export class AdminIngredientsAddComponent implements OnInit {

  ingredientModel: Ingredient = {caloricValue: 0, ingredientName: '', nutritionalValue: 0};

  constructor(private ingredientsService: IngredientService,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Add Ingredient | Foodie');
  }

  onSubmit(): void {
    this.ingredientsService.createIngredient(this.ingredientModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_LIST}`);
    });
  }
}
