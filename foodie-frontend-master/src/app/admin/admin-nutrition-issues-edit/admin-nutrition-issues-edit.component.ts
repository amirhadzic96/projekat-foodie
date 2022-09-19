import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {NutritionIssueService} from '../../services/nutrition-issue.service';
import {NutritionIssue} from '../../interface/nutritionIssue';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-nutrition-issues-edit',
  templateUrl: './admin-nutrition-issues-edit.component.html',
  styleUrls: ['./admin-nutrition-issues-edit.component.css']
})
export class AdminNutritionIssuesEditComponent implements OnInit {

  nutritionIssueModel: NutritionIssue;

  constructor(private nutritionIssueService: NutritionIssueService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin: Edit Nutrition Issue | Foodie');
    this.activatedRoute.data.subscribe(routeData => {
      this.nutritionIssueModel = routeData.nutritionIssue;
    });
  }

  onSubmit(): void {
    this.nutritionIssueService.updateNutritionIssue(this.nutritionIssueModel.id, this.nutritionIssueModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
    });
  }
}
