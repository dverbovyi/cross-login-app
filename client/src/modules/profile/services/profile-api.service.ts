import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APIProvidersFactory, UserService } from '../../../common/services';

@Injectable()
export class ProfileAPIService {
    constructor(
        private apiProvidersFactory: APIProvidersFactory,
        private userService: UserService
    ) { }

    public getUser(): Observable<any> {
        const service = this.apiProvidersFactory.getProvider(this.userService.userModel.authType);

        return service.getUser();
    }

    public getFeed(): Observable<any> {
        const service = this.apiProvidersFactory.getProvider(this.userService.userModel.authType);

        return service.getFeed();
    }

    public logout(): Observable<any> {
        const service = this.apiProvidersFactory.getProvider(this.userService.userModel.authType);

        return service.logout();
    }

}