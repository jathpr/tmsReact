import React from 'react';
import ReactDOM from 'react-dom';
import { HelloC } from './components/HelloC';
import users from './users.json';
import './index.css';

// ReactDOM.render(<HelloUsers users={users} />, document.getElementById('root'));
ReactDOM.render(<HelloC>text</HelloC>, document.getElementById('root'));
