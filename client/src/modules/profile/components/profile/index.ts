import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Unsubscriber } from '../../../../common/mixins/unsubscriber';
import { RouteService } from '../../../../common/services';
import { ProfileAPIService } from '../../services';

@Component({
    selector: 'profile',
    template: require('./profile.tpl.html'),
})
export class ProfileComponent extends Unsubscriber implements OnInit {
    private userData: any;

    constructor(
        private route: ActivatedRoute, 
        private profileAPIService: ProfileAPIService,
        private routeService: RouteService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscriptions.push(this.route.data.subscribe((data:any) => {
            const user = data.profile,
                records = data.feed.records;

            if(user.error)
                return;

            this.userData = {
                username: user.username,
                avatar: user.avatar,
                records: records
            }
        }));
    }

    private logout(): void {
        this.subscriptions.push(
            this.profileAPIService.logout()
                .subscribe(this.goToMain.bind(this), this.goToMain.bind(this))
        )
    }

    private goToMain(): void {
        this.routeService.navigateToHome();
    }
}