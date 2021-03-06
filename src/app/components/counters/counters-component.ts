import { Component, View, NgFor } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

@Component({ 
  selector: 'counters' 
})
@View({
  templateUrl: 'app/components/counters/counters.html',
  directives: [CounterComponent, NgFor]
})
export class CountersComponent {
  model: Array<Number>;

  constructor() {
    this.model = [];
  }

  addCounter() {
    this.model.push(0);
  }

  pupdate(countName) {
    return (newVal => this.model[countName] = newVal);
  }

  premove(idx) {
    return (e => this.model.splice(idx, 1));
  }
  
};