import { Component, OnInit } from '@angular/core';
import {RoutesConstant} from '../constants/routes-constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../assets/css/admin.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  openRecipesList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
  }

  openNutritionIssuesList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
  }

  openIngredientsList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_LIST}`);
  }
}
