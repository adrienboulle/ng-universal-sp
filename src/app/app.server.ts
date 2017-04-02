import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { ServerTransferStateModule, TransferState } from '@angularclass/universal-transfer-state/server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app'
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule,
  ],
})
export class AppServerModule {
  constructor(transferState: TransferState, appRef: ApplicationRef) {
    appRef.isStable
    .filter((isStable: boolean) => isStable)
    .first()
    .subscribe(() => transferState.inject('head'));
  }
}
