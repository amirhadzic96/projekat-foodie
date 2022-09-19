import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DailyMealPlan} from 'src/app/interface/dailyMealPlan';
import {CalorieStatus} from 'src/app/interface/enums/calorieStatus';
import {DailyMealPlanService} from 'src/app/services/dailyMealPlan.service';
import {AuthService} from '../../auth/shared/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-daily-meal-plans',
  templateUrl: './daily-meal-plans.component.html',
  styleUrls: ['./daily-meal-plans.component.css']
})
export class DailyMealPlansComponent implements OnInit {
  plans: DailyMealPlan[];
  latestPlan: DailyMealPlan;
  userId: number;
  calorieStatus = CalorieStatus;

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private dailyMealPlanService: DailyMealPlanService,
              private router: Router,
              private titleService: Title) {
    this.userId = this.authService.getId();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Daily Meal | Foodie');
    this.getDailyMealPlans();
    if (this.latestPlan == null) { this.createNewPlan(); }
  }

  getDailyMealPlans(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.plans = routeData.plans;
      this.latestPlan = routeData.latestPlan;
    });
  }

  createNewPlan(): void {
    this.dailyMealPlanService.createMealPlan().subscribe(newPlan => {
      this.latestPlan = newPlan;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/meal-planning']);
      });
    });
  }
}
