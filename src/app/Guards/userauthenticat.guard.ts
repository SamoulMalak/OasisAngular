import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class userauthenticatGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
       let token= localStorage.getItem('Token');

   if (token != null) 
  {
    return true ;
  }
  
   this.router.navigate(['/account/login']);
   return false;
    
  }
}


