import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { RoutedContent } from './RoutedContent';

export const App = () => (
  <BrowserRouter>
    <Sidebar></Sidebar>
    <RoutedContent></RoutedContent>
  </BrowserRouter>
);
