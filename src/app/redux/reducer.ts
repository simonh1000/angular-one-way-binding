import { List } from '../../../node_modules/immutable/dist/immutable.js';
import { addCounter, removeCounter, updCounter } from './state.js'

export const INITIAL_STATE = List()

export const ADD_COUNTER = 'add_counter';
export const REMOVE_COUNTER = 'remove_counter';
export const UPD_COUNTER = 'upd_counter';

export default function reducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case ADD_COUNTER:
      return addCounter(state);
    case REMOVE_COUNTER:
      return removeCounter(state, action.index);
    case UPD_COUNTER:
      return updCounter(state, action.index, action.value);
  }
  return state;
}