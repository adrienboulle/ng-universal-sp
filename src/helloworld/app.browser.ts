import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserTransferStateModule } from '@angularclass/universal-transfer-state/browser';

import { HelloWorldModule } from './app';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  bootstrap: [HelloWorldComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'hlw',
    }),
    BrowserTransferStateModule,
    HelloWorldModule,
  ],
})
export class HelloWorldBrowserModule {}
