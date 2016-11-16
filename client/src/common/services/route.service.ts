import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteService {
    constructor(private _router: Router) { }

    public navigateToHome(): void {
        this._router.navigate(['/']);
    }

    public navigateToProfile(): void {
        this._router.navigate(['/profile']);
    }
}