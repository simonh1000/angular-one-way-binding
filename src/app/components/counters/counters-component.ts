import { Component, View } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

@Component({ 
  selector: 'counters'
})
@View({
  templateUrl: 'app/components/counters/counters.html',
  directives: [CounterComponent]
})
export class CountersComponent {
  model: Object;
  
  constructor() {
    this.model = {
      "top" : 10,
      "bot" : 20
    }
  }
  
  pupdate(modelName) {
    return ( newVal => this.model[modelName] = newVal);
  }
  
};