import { Component, View } from 'angular2/angular2';
import { CounterComponent } from '../counter/counter-component';

@Component({ selector: 'counters' })
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
  
  mchangetop(delta) {
    this.mchange('top')(delta);  
  }
  
  mchange(countName){
    return (delta => {
      console.log(countName, delta);      
      this.model[countName] += delta);
    });
  }
  
  eventHandler(evt) {
    console.log(evt);    
  }
};