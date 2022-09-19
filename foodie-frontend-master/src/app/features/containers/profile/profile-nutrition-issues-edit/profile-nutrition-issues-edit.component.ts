import {Component, OnInit} from '@angular/core';
import {NutritionIssue} from '../../../../interface/nutritionIssue';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {RecipeService} from '../../../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../interface/user';

@Component({
  selector: 'app-profile-nutrition-issues-edit',
  templateUrl: './profile-nutrition-issues-edit.component.html',
  styleUrls: ['./profile-nutrition-issues-edit.component.css']
})
export class ProfileNutritionIssuesEditComponent implements OnInit {

  userModel: User;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  faEdit = faEdit;
  nutritionIssues: NutritionIssue[];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });
    this.activatedRoute.data.subscribe(routeData => {
      this.userModel = routeData.user;
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.userModel.id, this.userModel).subscribe(() => {
      const element = document.getElementById('closeModalNutritionIssues');
      element.setAttribute('data-dismiss', 'modal');
      element.click();
    });
  }

}
