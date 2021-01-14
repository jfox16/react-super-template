import {
  CounterActionTypes,
  INCREMENT,
  DECREMENT
} from './types';

const initialState: number = 0;

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): number {
  console.log('State!', state);
  console.log('Action!', action);
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}