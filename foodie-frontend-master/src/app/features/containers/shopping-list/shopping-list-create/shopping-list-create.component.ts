import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../../../../services/shoppingList.service';
import {Router} from '@angular/router';
import {ShoppingList} from '../../../../interface/shoppingList';
import {AuthService} from '../../../auth/shared/auth.service';

@Component({
  selector: 'app-shopping-list-create',
  templateUrl: './shopping-list-create.component.html',
  styleUrls: ['./shopping-list-create.component.css']
})
export class ShoppingListCreateComponent implements OnInit {

  shoppingList: ShoppingList;
  errors;

  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private authService: AuthService) {
    this.shoppingList = {ingredients: [], title: '', userId: this.authService.getId()};
    this.errors = [];
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    if (this.shoppingList.title === '') {
      this.errors.push(`Field cannot be empty !`);
      return;
    }

    this.errors = [];

    this.shoppingListService.createShoppingList(this.shoppingList).subscribe(() => {

      const element = document.getElementById('closeModal');
      element.setAttribute('data-dismiss', 'modal');
      element.click();

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/shopping-lists']);
      });
    });
  }
}
