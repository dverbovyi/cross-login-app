import { Injectable, Injector } from '@angular/core';

import { IAPIProvider } from './../interfaces/index';
import { API_PROVIDERS } from './api-providers';
import { UserService } from './user.service';

@Injectable()
export class APIProvidersFactory {
    constructor(private injector: Injector, private userService: UserService) {}

    public getProvider(type = 0): IAPIProvider {
        this.userService.userModel.authType = type;

        const provider = API_PROVIDERS.find((provider) => provider.AuthType === type );

        return this.injector.get(provider.name);
    }
}