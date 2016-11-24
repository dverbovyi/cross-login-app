import { LoginGuard } from './../../guards/login.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RouteService } from '../../../../common/services';
import { LoginAPIService } from '../../services';
import { Unsubscriber } from '../../../../common/mixins/unsubscriber';
import { AUTH_TYPES } from '../../../../common/consts/auth-types.const';

@Component({
    selector: 'login',
    template: require('./login.tpl.html')
})
export class LoginComponent extends Unsubscriber {
    private credentials: any = {};

    constructor(
        private loginAPIService: LoginAPIService,
        private _router: Router,
        private _routerService: RouteService
    ) {
        super();
    }

    public login(type: number): void {
        console.log(this.credentials);
        if (!this.credentials.password || !this.credentials.email)
            return;

        this._login(AUTH_TYPES.Built_In, this.credentials);
    }

    public loginWithFacebook(): void {
        this._login(AUTH_TYPES.Facebook);
    }

    public loginWithTwitter(): void {
        alert('Not implemented yet')
        // this._login(AUTH_TYPES.Twitter);
    }

    private _login(authType: number, body?: any): void {
        this.subscriptions.push(
            this.loginAPIService
                .login(authType, this.credentials)
                .subscribe((res: any) => {
                    this._routerService.navigateToProfile();
                    console.log(res);
                    
                }, this.handleError.bind(this)));
    }

    private handleError(error: any): void {
        console.error(error);
    }
}