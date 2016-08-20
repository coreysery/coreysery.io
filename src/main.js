'use strict';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// make sure styles gets loaded by webpack
// import './styles.less';

// Compile and launch module
platformBrowserDynamic().bootstrapModule(AppModule);
