import { Component } from '@angular/core'

@Component({
  selector: 'lazy',
  template: `<h3>{{text}}</h3>`
})
export class LazyComponent {
  public text: string = 'Yo man, i\'m so lazy...';
}
