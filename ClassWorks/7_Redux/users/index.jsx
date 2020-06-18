import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'antd/dist/antd.css';
// import { App } from './context/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
