'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SocialBlocksComponent }  from './socials';
import { SocialService } from './socials/social.service';

@NgModule({
    imports: [ BrowserModule ],
    providers: [ SocialService ],
    declarations: [ AppComponent, SocialBlocksComponent ],
    bootstrap:    [ AppComponent ]
})
class AppModule {
    constructor () {}
}

export { AppModule };
