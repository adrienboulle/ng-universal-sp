import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';

@Component({
  selector: 'home',
  template: `<h3>Hello {{name | async}}!</h3>`
})
export class HomeComponent implements OnInit {
  public name: Promise<string>;

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.name = this._appService.getName();
  }
}
