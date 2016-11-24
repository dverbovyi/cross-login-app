import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [],
    declarations: [],
    exports: [
        RouterModule, 
        HttpModule,
        BrowserModule,
        FormsModule
    ]
})
export class SharedModule {
    constructor() { }
}