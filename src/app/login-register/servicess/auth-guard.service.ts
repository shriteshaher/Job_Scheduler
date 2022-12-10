import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  token:any
  constructor(public jwtHelper: JwtHelperService,private router:Router) { }
  isAuthenticated(): boolean {
    this.token= localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
   
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
    
  }
}
 

