import { INCREMENT, DECREMENT, CounterActionTypes } from './types';

export function increment(amount: number): CounterActionTypes {
  return {
    type: INCREMENT,
    payload: amount
  };
}
export function decrement(amount: number): CounterActionTypes {
  return {
    type: DECREMENT,
    payload: amount
  };
}