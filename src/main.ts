import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

if(process.env.ENV === 'local') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);