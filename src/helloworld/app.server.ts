import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { ServerTransferStateModule, TransferState } from '@angularclass/universal-transfer-state/server';

import { HelloWorldModule } from './app';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  bootstrap: [HelloWorldComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'hlw'
    }),
    ServerModule,
    ServerTransferStateModule,
    HelloWorldModule,
  ],
})
export class HelloWorldServerModule {
  constructor(transferState: TransferState, appRef: ApplicationRef) {
    appRef.isStable
    .filter((isStable: boolean) => isStable)
    .first()
    .subscribe(() => transferState.inject('head'));
  }
}
