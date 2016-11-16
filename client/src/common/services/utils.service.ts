import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    constructor() { }

    public capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public arraySum(array: number[]): number {
        return array.reduce((prev, next) => prev + next);
    }

    public isJSON(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return true;
    }

    public overwriteConsoleOutput(): void {
        const console: Object = window.console,
            noop: Function = () => { };

        for (const key in console) {
            if (!console.hasOwnProperty(key))
                continue;

            console[key] = noop;
        }
    }
}