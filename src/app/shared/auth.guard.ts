import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        public authService: AuthServiceService,
        public router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let authType = localStorage.getItem('authType')
        console.log(this.authService.isLoggedIn);
        console.log(this.authService.isAdmin);

        if (!this.authService.isLoggedIn) {
            this.router.navigateByUrl('/login')
        }

        return true;
    }

}