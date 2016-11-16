import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfileAPIService } from './profile-api.service';

@Injectable()
export class ProfileResolve implements Resolve<any> {
    constructor(private _profileAPIService: ProfileAPIService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return Observable.forkJoin(
            this._profileAPIService.getUser(),
            this._profileAPIService.getPhotos(),
        )
    }
}