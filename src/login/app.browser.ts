import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginModule } from './app';
import { LoginPageComponent } from './components/loginPage/loginPage.component';

@NgModule({
  bootstrap: [LoginPageComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'hlw',
    }),
    LoginModule,
  ],
})
export class LoginBrowserModule {}
