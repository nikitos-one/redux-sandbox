import { configureStore } from '@reduxjs/toolkit'
import counterReducer, {
  incremented,
  decremented,
  random
} from './counterSlice'

import './main.sass';

const store = configureStore({
  reducer: counterReducer
});

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch(incremented());
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(decremented());
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(random(payload));
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState().value;
}

store.subscribe(update);