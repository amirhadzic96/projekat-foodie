import {Component, OnInit} from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../auth/shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../interface/user';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  userModel: User;

  constructor(private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  faEdit = faEdit;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.userModel = routeData.user;
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.userModel.id, this.userModel).subscribe(() => {
      const element = document.getElementById('closeModal');
      element.setAttribute('data-dismiss', 'modal');
      element.click();
    });
  }

}
