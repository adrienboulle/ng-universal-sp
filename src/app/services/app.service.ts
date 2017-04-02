import { Injectable, Inject } from '@angular/core';

import { TransferHttp } from '@angularclass/universal-transfer-state';

import { AbstractService } from '../../shared/services/abstract.service';
import { APP_CONFIG, AppConfig } from '../../shared/config/config';

@Injectable()
export class AppService extends AbstractService {
  constructor (@Inject(APP_CONFIG) public config: AppConfig, private _transferHttp: TransferHttp) {
    super('/data', config);
  }

  public getName(): Promise<string> {
    return this._transferHttp.get(this.getUrl())
    .toPromise()
    .then(data => data.name);
  };
}
