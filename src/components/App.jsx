import React from 'react';
import { ToDo } from './ToDo';
import { WrongState } from './WrongState';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => (
  <Router>
    <ToDo />
    <WrongState />
  </Router>
);
