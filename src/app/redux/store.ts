
import { createStore } from '../../../node_modules/redux/dist/redux.js';
import reducer from './reducer';

export function makeStore() {
  return createStore(reducer);
}