import { Component, View, Input, Output, EventEmitter } from 'angular2/angular2';

@Component({
  selector: 'counter'
})
@View({
  templateUrl: 'app/components/counter/counter.html',
})
export class CounterComponent {
  @Input() count : number;
  @Output() updater = new EventEmitter();
  @Output() remover = new EventEmitter();

  constructor() {
  }

  action(val : string) {
    let delta = (val === 'inc') ? 1 : -1;
    this.updater.next(this.count + delta);
  }
 
  remove() {
    this.remover.next('X');
  }
};