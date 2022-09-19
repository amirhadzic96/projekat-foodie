import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {NutritionIssueService} from '../services/nutrition-issue.service';
import {NutritionIssue} from '../interface/nutritionIssue';

@Injectable()
export class NutritionIssueResolver implements Resolve<NutritionIssue> {

  constructor(private nutritionIssueService: NutritionIssueService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NutritionIssue> {
    return this.nutritionIssueService.getNutritionIssue(route.paramMap.get('id'));
  }
}
