import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { LoginBrowserModuleNgFactory } from './app.browser.ngfactory';

import 'zone.js/dist/zone.js';

enableProdMode();
platformBrowser().bootstrapModuleFactory(LoginBrowserModuleNgFactory);
