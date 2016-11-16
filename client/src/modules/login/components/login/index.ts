import { LoginGuard } from './../../guards/login.guard';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { LoginAPIService } from '../../services';
import { RouteService } from '../../../../common/services';
import { ICredentials } from '../../interfaces';

@Component({
    selector: 'login',
    template: require('./login.tpl.html')
})
export class LoginComponent implements OnInit {
    constructor(
        private _loginAPIService: LoginAPIService,
        private _router: Router,
        private _routerService: RouteService
    ) { }

    public ngOnInit() { }

    private login(credentials: ICredentials): void {
        this._loginAPIService
            .login(credentials)
            .then((res: any) => { console.log(res); })
            .catch(this.redirectToMain.bind(this));
    }

    private loginWithFacebook(): void {
        this._loginAPIService
            .loginWithFaceBook()
            .then((res) => {
                this._routerService.navigateToProfile();
            })
            .catch(this.redirectToMain.bind(this));
    }

    private loginWithTwitter(): void {
        alert('Sorry, currently we don\'t support it yet');
    }

    private redirectToMain(): void {
        this._router.navigate(['/']);
    }

    private logout(): void {
        this._loginAPIService
            .logout()
            .then(this.redirectToMain.bind(this), this.redirectToMain.bind(this))
            .catch(this.redirectToMain.bind(this));
    }
}