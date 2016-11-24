import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared';
import { LoginModule } from '../login';
import { ProfileModule } from '../profile';

import { AppComponent, WelcomeComponent } from './components';
import { 
    UtilsService, 
    ConfigService, 
    RouteService, 
    UserService, 
    APIProvidersFactory, 
    API_PROVIDERS
} from '../../common/services';

import { AuthGuard } from './../../common/guards';

import { ENV_PROVIDERS } from './../../common/environment';

const AppRoutes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes),
        SharedModule,
        LoginModule,
        ProfileModule
    ],
    declarations: [AppComponent, WelcomeComponent],
    providers: [
        UtilsService,
        ConfigService,
        RouteService,
        UserService,
        AuthGuard,
        APIProvidersFactory,
        ...API_PROVIDERS.map((provider) => { return { provide: provider.name, useClass: provider}; }),
        ...ENV_PROVIDERS,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        FB.init({
            appId: '1120123638105090',
            xfbml: true,
            cookie: true,
            version: 'v2.8'
        });
        FB.AppEvents.logPageView();
    }
}