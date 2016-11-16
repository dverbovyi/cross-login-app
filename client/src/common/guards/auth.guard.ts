import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, RouteService } from './../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private routeService: RouteService,
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(state.url, this.authService.isAuthenticated())
        if (state.url !== '/login' && !this.authService.isAuthenticated()) {
            this.routeService.navigateToHome();
            return false;
        }

        return true;
    }
}