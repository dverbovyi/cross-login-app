import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { IAuthState } from '../interfaces';

@Injectable()
export class AuthService {
    private _token: string;
    private _authState: BehaviorSubject<IAuthState>;

    constructor() { 
        this._authState = new BehaviorSubject<IAuthState>({
            token: void 0
        });
    }

    get token(): string {
        return this._token;
    }

    public isAuthenticated(): boolean {
        return !!this._token;
    }

    set token(token: string) {
        this._token = token;
        this._authState.next({token})
    }

    get authState(): Observable<IAuthState> {
        return this._authState.asObservable();
    }
}