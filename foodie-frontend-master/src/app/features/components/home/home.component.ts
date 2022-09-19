import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Home | Foodie');
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
