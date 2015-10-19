import { Component, View } from 'angular2/angular2';
import { CountersComponent } from '../counters/counters-component';

@Component({ selector: 'app' })
@View({
  template: `<counters></counters>`,
  directives: [CountersComponent],
})

export class AppComponent {

}
