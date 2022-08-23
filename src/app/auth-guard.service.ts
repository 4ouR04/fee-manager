import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService, private router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.authService.isAuthenticated()
            .then((authenticated: boolean) => {
                if (authenticated) {
                  return true;
                } else {
                 return  this.router.navigate(['/']);
                }
            })
    }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    return this.canActivate(route, state)
  }
  
}