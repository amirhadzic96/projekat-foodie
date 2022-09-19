import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthService} from '../features/auth/shared/auth.service';
import {DailyMealPlan} from '../interface/dailyMealPlan';

@Injectable({
  providedIn: 'root'
})
export class DailyMealPlanService {
  apiUrl: string = environment.api;
  userId: number;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.userId = this.authService.getId();
  }

  getAllMealPlans(): Observable<DailyMealPlan[]> {
    return this.http.get<DailyMealPlan[]>(`${this.apiUrl}/meal-planning/${this.userId}`);
  }

  getLatestMealPlan(): Observable<DailyMealPlan> {
    return this.http.get<DailyMealPlan>(`${this.apiUrl}/meal-planning/${this.userId}/latest`);
  }

  createMealPlan(): Observable<DailyMealPlan> {
    return this.http.post<DailyMealPlan>(`${this.apiUrl}/meal-planning/${this.userId}`, null);
  }
}
