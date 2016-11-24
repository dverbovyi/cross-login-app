import { Injector, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { APIService, UserService, UtilsService, ConfigService } from '../';
import { AUTH_TYPES } from '../../consts/auth-types.const';
import { IAPIProvider, IUserModel, IUserProfile, IFeed } from '../../interfaces';

@Injectable()
export class FacebookAPIProvider extends APIService implements IAPIProvider {
    static AuthType = AUTH_TYPES.Facebook;
    
    constructor(
        protected http: Http,
        protected utilsService: UtilsService,
        protected configService: ConfigService,
        protected injector: Injector,
        private userService: UserService
    ) {
        super(configService, http, utilsService, injector);
    }

    public login(): Observable<IUserModel> {
        return Observable.create(observer => {
            FB.login((res) => {
                if (res.status !== 'connected')
                    return observer.error();

                this.userService.userModel = {
                    token: res.authResponse.accessToken,
                    authType: AUTH_TYPES.Facebook
                };

                observer.next(res);
            }, { scope: 'public_profile,user_photos' });
        });
    }

    public logout(): Observable<IUserModel> {
        return Observable.create(observer => {
            //TODO
            observer.next(); 
        });
    }

    public getUser(): Observable<IUserProfile> {
        const params: URLSearchParams = new URLSearchParams(),
            url: string = this.getUrl('/facebook/me');

        params.set('token', this.userService.userModel.token);

        return this.sendMappedRequest('GET', url, (res)=> {
            return {
                username: res.data.name,
                avatar: res.data.picture.data.url
            }
        }, params);
    }

    public getFeed(): Observable<IFeed> {
        const params: URLSearchParams = new URLSearchParams(),
            url: string = this.getUrl('/facebook/photos');

        params.set('token', this.userService.userModel.token);

        return this.sendMappedRequest('GET', url, (res)=> {
            console.log(res)
            return {
                records: res.data.map(record => {
                    return {
                        picture: record.picture,
                        title: record.name
                    }
                })
            }
        }, params);
    }

}