import { Injectable, Inject } from '@angular/core';
import { AbstractService } from '../../shared/services/abstract.service';

import { Http } from '@angular/http';
import { APP_CONFIG, AppConfig } from '../../shared/config/config';

declare let window: any;

@Injectable()
export class LoginService extends AbstractService {
  constructor(@Inject(APP_CONFIG) public config: AppConfig, private _http: Http) {
    super('/login', config);
  }

  public login(data: any): Promise<any> {
    return this._postLoginFront(data);
  }

  public requestResetPassword(data: any): Promise<any> {
    return this._postRequestResetPasswordFront(data);
  }

  public requestChangePassword(data: any): Promise<any> {
    return this._postRequestChangePasswordFront(data);
  }

  private _postLoginFront(data: any): Promise<any> {
    return this._http
    .post('/signin/mail', data)
    .toPromise()
    .then(this._extractData)
    .catch(this._handleError);
  }

  private _postRequestResetPasswordFront(data: any): Promise<any> {
    return this._http
    .post('/login/password/reset/request', data)
    .toPromise()
    .then(this._extractData)
    .catch(this._handleError);
  }

  private _postRequestChangePasswordFront(data: any): Promise<any> {
    return this._http
    .post('/login/password/change/request', data)
    .toPromise()
    .then(this._extractData)
    .catch(this._handleError);
  }
}
