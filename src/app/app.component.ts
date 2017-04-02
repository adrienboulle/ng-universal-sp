import { Component } from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <h1>Universal Demo</h1>
    <a routerLink="/home">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
