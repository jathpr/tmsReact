import React from 'react';
import { ToDo } from './ToDo';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => (
  <Router>
    <ToDo />
  </Router>
);
