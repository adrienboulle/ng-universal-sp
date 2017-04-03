import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LoginPageComponent } from './components/loginPage/loginPage.component';
import { routingProvidersLogin, routingLogin } from './components/loginPage/login.routes';

import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/resetPassword/resetPassword.component';
import { ChangePasswordComponent } from './components/changePassword/changePassword.component';

import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    SharedModule,
    routingLogin,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    routingProvidersLogin,
    LoginService,
  ],
  declarations: [
    ResetPasswordComponent,
    ChangePasswordComponent,
    LoginPageComponent,
    LoginComponent,
  ],
  exports: [
    ResetPasswordComponent,
    ChangePasswordComponent,
    LoginPageComponent,
    LoginComponent,
  ],
})
export class LoginModule {}
