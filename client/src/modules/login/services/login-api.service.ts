import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APIProvidersFactory } from '../../../common/services';
import { IAPIProvider } from '../../../common/interfaces';

@Injectable()
export class LoginAPIService {
    private apiProvider: IAPIProvider;

    constructor(private apiProvidersFactory: APIProvidersFactory) { }

    public login(authType: number, body: any): Observable<any> {
        this.apiProvider = this.apiProvidersFactory.getProvider(authType);

        return this.apiProvider.login(body);
    }
}