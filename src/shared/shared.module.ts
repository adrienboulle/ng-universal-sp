import { NgModule } from '@angular/core';

import { APP_CONFIG } from './config/config';
import { config } from './config/base.conf';

@NgModule({
  providers: [
    { provide: APP_CONFIG, useValue: config }
  ],
})
export class SharedModule {}
