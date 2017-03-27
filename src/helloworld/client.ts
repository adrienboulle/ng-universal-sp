import { platformBrowser } from '@angular/platform-browser';
import { HelloWorldBrowserModuleNgFactory } from './app.browser.ngfactory';

platformBrowser().bootstrapModuleFactory(HelloWorldBrowserModuleNgFactory);
