import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NutritionIssue} from '../interface/nutritionIssue';

@Injectable({
  providedIn: 'root'
})
export class NutritionIssueService {

  apiUrl: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getNutritionIssues(): Observable<NutritionIssue[]> {
    return this.http.get<NutritionIssue[]>(`${this.apiUrl}/nutrition-issues`);
  }

  getNutritionIssue(id: string): Observable<NutritionIssue> {
    return this.http.get<NutritionIssue>(`${this.apiUrl}/admin/nutrition-issues/${id}`);
  }

  createNutritionIssue(nutritionIssue: NutritionIssue): Observable<NutritionIssue> {
    return this.http.post<NutritionIssue>(`${this.apiUrl}/admin/nutrition-issues`, nutritionIssue);
  }

  updateNutritionIssue(id: number, nutritionIssue: NutritionIssue): Observable<NutritionIssue> {
    return this.http.put<NutritionIssue>(`${this.apiUrl}/admin/nutrition-issues/${id}`, nutritionIssue);
  }

  deleteNutritionIssue(id: number): Observable<NutritionIssue> {
    return this.http.delete<NutritionIssue>(`${this.apiUrl}/admin/nutrition-issues/${id}`);
  }
}
