import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './store/counter.actions';
import { useSelector } from 'react-redux';
import { selectCounter } from './store/counter.selectors';

export const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
