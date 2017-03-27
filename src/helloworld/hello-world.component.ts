import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { TransferHttp } from '@angularclass/universal-transfer-state';

@Component({
  selector: 'hello-world-app',
  template: `
    <div>Hello {{ name }}!</div>
    <button (click)="clicked()"></button>
  `,
  styles: [`
    div {
      font-weight: bold;
    }
  `]
})
export class HelloWorldComponent {
  public name: 'world';

  constructor(private _transferHttp: TransferHttp) {}

  clicked(): void {
    this.name += '!';
  }

  ngOnInit(): void {
    this._transferHttp
    .get('http://localhost:9876/data')
    .toPromise()
    .then(res => {
      console.log('res ====>', res);

      this.name = res.name;
    })
  }
}
