import {Component, OnInit} from '@angular/core';
import {NutritionIssueService} from '../../services/nutrition-issue.service';
import {RoutesConstant} from '../../constants/routes-constant';
import {Router} from '@angular/router';
import {NutritionIssue} from '../../interface/nutritionIssue';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-nutrition-issues-add',
  templateUrl: './admin-nutrition-issues-add.component.html',
  styleUrls: ['./admin-nutrition-issues-add.component.css']
})
export class AdminNutritionIssuesAddComponent implements OnInit {

  nutritionIssueModel: NutritionIssue = {name: ''};

  constructor(private nutritionIssueService: NutritionIssueService,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Add Nutrition Issue | Foodie');
  }

  onSubmit(): void {
    this.nutritionIssueService.createNutritionIssue(this.nutritionIssueModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
    });
  }
}
