import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { AppService } from '../services/app.service';

import { ElementComponentNgFactory } from './element.component.ngfactory';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public name: Promise<string>;

  @ViewChild('element', { read: ViewContainerRef }) private viewElement: ViewContainerRef;

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.name = this._appService.getName();

    this.viewElement.createComponent(ElementComponentNgFactory);
  }
}
