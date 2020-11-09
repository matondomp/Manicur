import { Token } from './../types/token';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router
    ){}
public values:boolean
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  boolean { 
      var list=localStorage.getItem('User');
     /*  var data={
        token:list?.token
      } */
      if(list){
      return true;
    } 
    this.router.navigate(['/']); 
    return false
  }
  
}
