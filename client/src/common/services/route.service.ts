import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteService {
    constructor(private _router: Router) { }

    public navigateToHome(): void {
        this._router.navigate(['/']);
    }

    public navigateToLogin(): void {
        this._router.navigate(['/login']);
    }

    public navigateToProfile(): void {
        console.log('navigateToProfile')
        this._router.navigate(['/profile']);
    }
}