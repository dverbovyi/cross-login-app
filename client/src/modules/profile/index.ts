import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared';
import { ProfileComponent } from './components';
import { ProfileAPIService, ProfileResolver, FeedResolver } from './services';
import { AuthGuard } from '../../common/guards';

const ProfileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
        resolve: {
            profile: ProfileResolver,
            feed: FeedResolver
        }
    }
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(ProfileRoutes)],
    declarations: [ProfileComponent],
    bootstrap: [ProfileComponent],
    providers: [ProfileAPIService, ProfileResolver, FeedResolver]
})
export class ProfileModule {
    constructor() { }
}