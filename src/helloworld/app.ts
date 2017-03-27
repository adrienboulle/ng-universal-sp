import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HelloWorldComponent } from './hello-world.component';
import { TransferHttpModule } from '@angularclass/universal-transfer-state';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [
    HelloWorldComponent,
  ],
  exports: [
    HelloWorldComponent,
  ],
})
export class HelloWorldModule {}
