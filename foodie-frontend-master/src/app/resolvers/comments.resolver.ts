import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CommentService} from '../services/comment.service';
import {Comment} from '../interface/comment';

@Injectable()
export class CommentsResolver implements Resolve<Comment[]> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> {
    return this.commentService.getComments(route.paramMap.get('id'));
  }
}
