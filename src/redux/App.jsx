import React from 'react';
import { Comp } from './Comp';
import { Second } from './Second';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Comp />
      <Second />
    </Provider>
  );
};
