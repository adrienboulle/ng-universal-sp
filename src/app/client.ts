import { platformBrowser } from '@angular/platform-browser';
import { AppBrowserModuleNgFactory } from './app.browser.ngfactory';

import 'zone.js/dist/zone.js';

platformBrowser().bootstrapModuleFactory(AppBrowserModuleNgFactory);
