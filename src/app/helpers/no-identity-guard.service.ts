import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoIdentityGuardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(){
    let account = localStorage.getItem('account');
    if(!account){
      return true;
    }
    else{
      this.router.navigate(['home']);
      return false;
    }    
  }
}
