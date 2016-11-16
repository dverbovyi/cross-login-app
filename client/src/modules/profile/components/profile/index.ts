import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile',
    template: require('./profile.tpl.html'),
})
export class ProfileComponent implements OnInit{
    private userData: any = {};
    constructor(private _route: ActivatedRoute) {}

    public ngOnInit(): void {
        this._route.data.subscribe((value:any) => {
            console.log(value)
            const user = value.profile[0].data,
                photos = value.profile[1].data;

            if(user.error)
                return;

            this.userData.username = user.name;
            this.userData.picture = user.picture.data.url;
            this.userData.photos = photos.data.reverse();
        });
    }
}