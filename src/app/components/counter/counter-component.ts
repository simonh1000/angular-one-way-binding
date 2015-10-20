import { Component, View, Input, Output, EventEmitter } from 'angular2/angular2';

@Component({
  selector: 'counter'
})
@View({
  templateUrl: 'app/components/counter/counter.html'
})
export class CounterComponent {
  @Input() count;
  @Output() updater = new EventEmitter();

  constructor() {
  }

  action(val) {
    let delta: Number = (val === 'inc') ? 1 : -1;
    this.updater.next(this.count + delta);
  }
};