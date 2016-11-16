import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class Unsubscriber implements OnDestroy {
    protected subscriptions: Subscription[] = [];

    constructor() {}

    public ngOnDestroy() {
        this.subscriptions.map((subscription) => {
            subscription.unsubscribe();
        });
    }
}
