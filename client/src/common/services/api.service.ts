import { Injectable, Injector } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService, ConfigService } from './index';

@Injectable()
export class APIService {
    protected config: any;
    protected subscribtions: any = {};

    constructor(
        protected configService: ConfigService,
        protected http: Http,
        protected utilsService: UtilsService,
        protected injector: Injector
    ) {
        this.config = injector.get('APIConfig') || injector.get('EnvAPIConfig');
    }

    public get(url: string, params?: URLSearchParams): Observable<any> {
        this._cancelRequest(url);

        return this.http.get(url, {
            search: params
        })
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    public post(url: string, body?: Object): Observable<any> {
        this._cancelRequest(url);

        return this.http.post(url, body)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    public put(url: string, body?: Object): Observable<any> {
        this._cancelRequest(url);

        return this.http.put(url, body)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    public delete(url: string, id: string): Observable<any> {
        let _url = `${url}/${id}`;

        this._cancelRequest(_url);

        return this.http.delete(_url)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    public sendMappedRequest(method: string, url: string, mapper: Function, params?: any): Observable<any> {
        const _method: string = method.toLowerCase();
        
        return Observable.create(observer => {
            this[_method].call(this, url, params).subscribe(res=> {
                observer.next(mapper(res));
                observer.complete();
            });
        });
    }

    protected extractData(res: any): any {
        return this.utilsService.isJSON(res._body) ? res.json() : res;
    }

    protected handleError(error: any): Observable<any> {
        console.error('An error has been occurred', error);
        return Observable.throw(error.message || error);
    }

    public getUrl(resource: string): string {
        const _conf: any = this.config, h: string = _conf.API_HOST || '';

        let b: string = _conf.API_BASE || '',
            v: string = _conf.API_VERSION || '';

        if (b)
            b += '/';

        if (v)
            v += '/';

        return `${h}/${b}${v}${resource}`;
    }

    private _cancelRequest(url: string): void {
        if (this.subscribtions[url])
            this.subscribtions[url].unsubscribe();
    }
}