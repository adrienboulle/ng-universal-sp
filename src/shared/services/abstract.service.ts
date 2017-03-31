import {Response, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class AbstractService {
  protected _protocol: string;
  protected _apiUrl: string;
  protected _path: string;
  protected _url: string;
  protected _token: string;

  constructor(url: string, token?: string, protocol?: string) {
    this._path = url;
    this._protocol = protocol ? protocol : 'http://';
    this._apiUrl = this._protocol + 'localhost';
    this._url = this._apiUrl + url;
    this._token = token;
  }

  protected _createAuthorizationHeader(headers?: Headers): Headers {
    headers = headers || new Headers();
    headers.append('Authorization', this._token);

    return headers;
  }

  protected _extractData(res: Response): Promise<any> {
    let body = res.json();

    if (body.status === 'OK')
      return Promise.resolve(body.data);

    if (body.status === 'ERROR')
      return Promise.reject(body);

    return Promise.resolve(body);
  }

  protected _handleError(error: Response | any): any {
    return Promise.reject(error);
  }
}
