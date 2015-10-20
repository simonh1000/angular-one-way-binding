import { Component, View } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

@Component({ selector: 'app' })
@View({
  template: `<counter [count]="model" (updater)="pupdate($event)"></counter>`,
  directives: [CounterComponent],
})

export class AppComponent {
  model: number;
  
  constructor() {
    this.model = 0;
  }
  
  pupdate(evt) {
    this.model = evt;
  }
}
