import { Router } from "@angular/router"
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  loggedIn = false;
  
  constructor(private router: Router) {}
  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }
  logout() {
    this.loggedIn = false;
  }
}