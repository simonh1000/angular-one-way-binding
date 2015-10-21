import { List } from '../../../node_modules/immutable/dist/immutable.js';


export function addCounter(currentState) {
	return currentState.push(0);
}

export function removeCounter(currentState, index) {
	return currentState.delete(index);
}

export function updCounter(currentState, index, val) {
	return currentState.update(index, x => val);
}
