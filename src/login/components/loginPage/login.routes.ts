import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { PathLocationStrategy } from '@angular/common';

import { RouterHelper } from '../../../shared/helpers/router.helper';

import { LoginComponent } from '../login/login.component';
import { ResetPasswordComponent } from '../resetPassword/resetPassword.component';
import { ChangePasswordComponent } from '../changePassword/changePassword.component';

export const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/password/reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'login/password/reset/:token',
    component: ChangePasswordComponent,
  },
];

export const routingProvidersLogin: any[] = [
  {
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  },
];

export const routingLogin: ModuleWithProviders = RouterModule.forRoot(loginRoutes);
