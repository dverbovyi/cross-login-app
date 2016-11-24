import { Injector, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { APIService, UserService, UtilsService, ConfigService } from '../';
import { AUTH_TYPES } from '../../consts/auth-types.const';
import { IAPIProvider, IUserModel } from '../../interfaces';

@Injectable()
export class BuiltInAPIProvider extends APIService implements IAPIProvider {
    static AuthType = AUTH_TYPES.Built_In;

    constructor(
        protected http: Http,
        protected utilsService: UtilsService,
        protected configService: ConfigService,
        protected injector: Injector,
        private userService: UserService
    ) {
        super(configService, http, utilsService, injector);
    }

    public login(body?: Object): Observable<IUserModel> {
        const url: string = this.getUrl('users/login');

        return Observable.create((observable) => {
            super.post(url, body)
                .subscribe((res) => {
                    this.userService.userModel = {
                        token: res.id,
                        userId: res.userId
                    };

                    observable.next(res);
                });
        });
    }

    public logout(): Observable<any> {
        const url: string = this.getUrl(`Users/logout?access_token=${this.userService.userModel.token}`);

        return super.post(url);
    }

    public getUser(): Observable<any> {
        const userId: number = this.userService.userModel.userId;
        const url: string = this.getUrl(`/users/${userId}`);

        return this.sendMappedRequest('GET', url, (res)=> {
            return {
                username: res.name,
                avatar: res.img
            }
        });
    }

    public getFeed(): Observable<any> {
        const userId: number = this.userService.userModel.userId;
        const url: string = this.getUrl(`/users/${userId}/records`);

        return this.sendMappedRequest('GET', url, (res)=> {
            console.log(res)
            return {
                records: res.records
            }
        });
    }

}