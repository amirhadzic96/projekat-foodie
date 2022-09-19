import {TypeOfMeal} from 'src/app/interface/enums/typeOfMeal';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from 'src/app/interface/recipe';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/shared/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, private toastr: ToastrService) {
  }
  isLoggedIn: boolean;
  typeOfMeal = TypeOfMeal;

  @Input()
  models: Recipe[];

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onSearch = new EventEmitter();

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public searchRecipes(key: string): void {
    this.onSearch.emit(key);
  }

  onClick(): void {
    this.toastr.warning('Please log in to continue');
  }
}
