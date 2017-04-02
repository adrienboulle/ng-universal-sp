import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserTransferStateModule } from '@angularclass/universal-transfer-state/browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app',
    }),
    BrowserTransferStateModule,
    AppModule,
  ],
})
export class AppBrowserModule {}
