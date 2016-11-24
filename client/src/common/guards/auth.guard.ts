import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RouteService, UserService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private routeService: RouteService,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (state.url !== '/login' && !this.userService.isAuthenticated()) {
            this.routeService.navigateToHome();
            return false;
        }
        console.log(state.url, this.userService.isAuthenticated())

        return true;
    }
}