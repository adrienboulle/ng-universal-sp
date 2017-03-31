import { Injectable } from '@angular/core';
import { AbstractService } from '../../shared/services/abstract.service';

import { Http } from '@angular/http';

declare let window: any;

@Injectable()
export class LoginService extends AbstractService {
  constructor(private _http: Http) {
    super('/login');
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
