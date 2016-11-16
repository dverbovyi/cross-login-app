import { Injectable, Injector } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { UtilsService, APIService, ConfigService, AuthService } from '../../../common/services';
import { ICredentials } from '../interfaces';

@Injectable()
export class LoginAPIService extends APIService {

    constructor(
        protected configService: ConfigService,
        protected http: Http,
        protected utilsService: UtilsService,
        protected _injector: Injector,
        private _authService: AuthService
    ) {
        super(configService, http, utilsService, _injector);
    }

    public login(body: ICredentials): Promise<any> {
        return new Promise((resolve, reject) => {
            const url: string = this.getUrl('login');

            this.subscribtions[url] = super.post(url, body).subscribe((res) => {
                resolve(res);
            }, reject);
        });
    }

    public loginWithFaceBook(): Promise<any> {
        return new Promise((resolve, reject) => {
            FB.login((res) => {
                console.log(res)
                if (res.status !== 'connected')
                    return reject();

                this._authService.token = res.authResponse.accessToken;

                resolve(res);
            }, {
                scope: 'public_profile,user_photos'
            });
        });
    }

    public logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            super.post(this.getUrl('logout')).subscribe((res) => {
                resolve(res);
            }, reject);
        });
    }
}