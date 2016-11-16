import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private _url: string = '/environment.json';

    constructor() { }

    public load(): Promise<any> {
        return window.fetch(this._url)
            .then((res) => {
                return res.json();
            }).catch(this.handleError);
    }

    private handleError(error: any): void {
        const message: string = 'Unable to retrieve config file.';

        console.warn(message);
    }
    
}