import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { LoginBrowserModuleNgFactory } from './app.browser.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(LoginBrowserModuleNgFactory);
