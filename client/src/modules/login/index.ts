import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared';
import { LoginComponent } from './components';

import { LoginAPIService } from './services';

const LoginRoutes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(LoginRoutes)],
    declarations: [LoginComponent],
    providers: [LoginAPIService],
    bootstrap: [LoginComponent]
})
export class LoginModule {
    constructor() { }
}