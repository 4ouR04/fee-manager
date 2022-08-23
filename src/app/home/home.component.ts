import { HeaderComponent } from '../header/header.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OptionService } from '../header/option.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Email = '';
  Password = '';
  Error = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private myoption: OptionService
  ) {}

  ngOnInit(): void {}
  onLogin() {
    if (this.Email === 'iamamos@gmail.com' && this.Password == 'kingsh$t') {
      this.myoption.option = "Logout"
      return this.authService.login();
    } else {
      this.Error = true;
      setTimeout(() => {
        this.Error = false;
      }, 5000);
    }
  }
}