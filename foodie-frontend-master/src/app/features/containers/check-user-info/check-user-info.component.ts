import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/interface/user';

@Component({
  selector: 'app-check-user-info',
  templateUrl: './check-user-info.component.html',
  styleUrls: ['./check-user-info.component.css']
})
export class CheckUserInfoComponent implements OnInit {

  user: User;
  infoMessage = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.user = routeData.user;
    });
    this.redirect();
  }

  redirect(): void {
    if (this.user.height === null || this.user.weight === null || this.user.nutritionIssues.length === 0) {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`/profile/${this.user.id}`], {queryParams: {additionalInfo: 'true'}});
      });
    } else {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`/meal-planning`]);
      });
    }
  }

}
