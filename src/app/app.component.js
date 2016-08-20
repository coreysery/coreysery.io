'use strict';

import { Component } from '@angular/core';

import { SocialBlocksComponent } from './socials';
import { SocialService } from './socials/social.service';

@Component({
    selector: 'coreyseryIOapp',
    templateUrl: './app.component.html',
    providers: [SocialService],
    styles: ['', require('./app.component.less')],
})
class AppComponent implements OnInit {
    constructor () {}

    ngOnInit() {
    }
}

export { AppComponent }
