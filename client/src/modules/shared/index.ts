import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [],
    declarations: [],
    exports: [
        RouterModule, 
        HttpModule,
        BrowserModule
    ]
})
export class SharedModule {
    constructor() { }
}