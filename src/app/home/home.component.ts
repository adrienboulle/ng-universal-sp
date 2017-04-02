import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TransferHttp } from '@angularclass/universal-transfer-state';

@Component({
  selector: 'home',
  template: `<h3>Hello {{name | async}}!</h3>`
})
export class HomeComponent implements OnInit {
  public name: Observable<string>;

  constructor(private _transferHttp: TransferHttp) {}

  ngOnInit() {
    this.name = this._transferHttp
    .get('http://localhost:9876/data')
    .map(data => data.name);
  }
}
