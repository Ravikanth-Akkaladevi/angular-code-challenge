import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private rotuer: Router) { }
  canActivate() {
    if (this.authService.loggedIn()) {
      return true
    }
    else {
      this.rotuer.navigate(['/login'])
      return false
    }

  }

}
