import { Component, View } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

@Component({ selector: 'app' })
@View({
  template: `<counter></counter>`,
  directives: [CounterComponent],
})

export class AppComponent {

}
