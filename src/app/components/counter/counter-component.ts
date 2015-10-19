import { Component, View } from 'angular2/angular2';

@Component({ selector: 'counter' })
@View({
  templateUrl: 'app/components/counter/counter.html',
})
export class CounterComponent {
  count: Number; 
  
  constructor() {
    this.count = 0;
  }
  
  change(delta) {
    this.count += delta;
  }
 
};