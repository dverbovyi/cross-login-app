import { Observable } from 'rxjs/Observable';

export interface IUserProfile {
    username: string;
    avatar: string;
}

interface IFeedRecord {
    picture?: string;
    title: string;
}

export interface IFeed {
    records: IFeedRecord[];
}

export interface IUserModel {
    token: string;
    authType?: number;
    userId?: number;
    profile?: IUserProfile;
    feed?: IFeed;
}

export interface IAPIProvider {
    login(body: any): Observable<any>;
    logout(): Observable<any>;
    getUser(): Observable<any>;
    getFeed(): Observable<any>;
}
