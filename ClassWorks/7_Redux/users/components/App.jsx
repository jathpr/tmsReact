import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Content';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Content />
      </Provider>
    </BrowserRouter>
  );
};
