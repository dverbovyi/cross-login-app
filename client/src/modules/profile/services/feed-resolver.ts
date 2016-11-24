import { APIService } from './../../../common/services/api.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { APIProvidersFactory, UserService } from '../../../common/services';
import { IUserProfile } from '../../../common/interfaces';
import { ProfileAPIService } from './profile-api.service';

@Injectable()
export class FeedResolver implements Resolve<any> {
    constructor(private userService: UserService, private apiProvidersFactory: APIProvidersFactory) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const service = this.apiProvidersFactory.getProvider(this.userService.userModel.authType);

        return service.getFeed();
    }
}