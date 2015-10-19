import { Component, View, Input, Output, EventEmitter } from 'angular2/angular2';

@Component({ 
    selector: 'counter'
  , properties: ['count:count', 'mchange:mchange']
})
@View({
  templateUrl: 'app/components/counter/counter.html',
})
export class CounterComponent {
  @Input() count : Number;
  @Output() mchange = new EventEmitter();
  @Output() parentRemove = new EventEmitter();
  
  constructor() {
  }
  
  change(delta) {
    this.mchange.next(delta);
  }
 
  remove() {
    this.parentRemove.next('X');
  }
};