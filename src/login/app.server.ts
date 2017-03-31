import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { LoginModule } from './app';
import { LoginPageComponent } from './components/loginPage/loginPage.component';

@NgModule({
  bootstrap: [LoginPageComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'lgin'
    }),
    ServerModule,
    LoginModule,
  ],
})
export class LoginServerModule {}
