import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { IUserModel } from '../interfaces';

@Injectable()
export class UserService {
    private _userModel: IUserModel;
    private _userState: BehaviorSubject<IUserModel>;

    constructor() { 
        this._userModel = {
            token: void 0
        };

        this._userState = new BehaviorSubject<IUserModel>({
            token: void 0
        });
    }

    get userModel(): IUserModel {
        return this._userModel;
    }

    public isAuthenticated(): boolean {
        return !!this._userModel.token;
    }

    set userModel(model: IUserModel) {
        this._userModel = model;
        this._userState.next(model);
    }

    get userObservable(): Observable<IUserModel> {
        return this._userState.asObservable();
    }
}