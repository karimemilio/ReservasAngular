import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({providedIn: 'root' })
export class AuthGuard implements CanActivate {

 constructor(private authService: LoginService, private router: Router) {
     
 }
 canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (!this.authService.isLogged()) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
    }
}
