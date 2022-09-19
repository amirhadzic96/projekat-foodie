import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/features/auth/shared/auth.service';
import {Comment} from 'src/app/interface/comment';
import {Recipe} from 'src/app/interface/recipe';
import {User} from 'src/app/interface/user';
import {CommentService} from 'src/app/services/comment.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  @Input()
  recipe: Recipe;

  userId: number;
  user: User;

  commentModel: Comment;
  errors;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private commentService: CommentService,
              private userService: UserService,
              private router: Router,
  ) {
    this.userId = this.authService.getId();
    this.commentModel = {comment: '', recipe: this.recipe, user: this.user, datetime: null};
    this.errors = [];
  }

  ngOnInit(): void {
    this.getComments();
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.userId + '').subscribe(user => this.user = user);
  }

  public getComments(): void {
    this.route.data.subscribe((routeData: { comments: Comment[] }) => {
      this.comments = routeData.comments;
    });
  }

  addComment(): void {
    if (this.commentModel.comment === '') {
      this.errors.push(`Field cannot be empty !`);
      return;
    }

    this.errors = [];
    this.commentModel.recipe = this.recipe;
    this.commentModel.user = this.user;
    this.commentService.createComment(this.recipe.id, this.commentModel).subscribe(() => {
      this.router.navigateByUrl('/recipes', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/recipes/' + this.recipe.id]);
      });
    });
  }
}
