import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TransferHttpModule } from '@angularclass/universal-transfer-state';

import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppService } from './services/app.service';

export const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    AppService,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  exports: [
    AppComponent,
  ],
})
export class AppModule {}
