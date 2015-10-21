import { Component, View, NgFor } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

import { ADD_COUNTER, REMOVE_COUNTER, UPD_COUNTER } from '../../redux/reducer';
import { makeStore } from '../../redux/store';

export const store = makeStore();

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
    store.subscribe(
      () => this.model = store.getState().toJS()
    );
  }

  addCounter() {
    store.dispatch({ type: ADD_COUNTER });
  }

  premove(idx) {
    return (e => store.dispatch({ type: REMOVE_COUNTER, index: idx}));
  }
  
  pupdate(idx) {
    // return (newVal => this.model[idx] = newVal);
    return (newVal => store.dispatch({ type: UPD_COUNTER, index:idx, value:newVal}));
  }

};