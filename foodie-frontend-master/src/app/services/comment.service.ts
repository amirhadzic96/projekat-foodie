import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Comment} from '../interface/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getComments(recipeId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/${recipeId}`);
  }

  createComment(recipeId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/comments/${recipeId}`, comment);
  }
}
