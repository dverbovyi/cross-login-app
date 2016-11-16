import { Injectable, Injector } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { UtilsService, APIService, ConfigService, AuthService } from '../../../common/services';

@Injectable()
export class ProfileAPIService extends APIService {
    constructor(
        protected configService: ConfigService,
        protected http: Http,
        protected utilsService: UtilsService,
        protected injector: Injector,
        private _authService: AuthService
    ) {
        super(configService, http, utilsService, injector);
    }

    public getUser(): Observable<any> {
        const params: URLSearchParams = new URLSearchParams(),
            url: string = this.getUrl('/profile');

        params.set('token', this._authService.token);

        return super.get(url, params);
    }

    public getPhotos(): Observable<any> {
        const params: URLSearchParams = new URLSearchParams(),
            url: string = this.getUrl('/photos');

        params.set('token', this._authService.token);

        return super.get(url, params);
    }
}