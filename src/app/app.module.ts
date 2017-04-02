import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TransferHttpModule } from '@angularclass/universal-transfer-state';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
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
