import React from 'react';
import { Tab } from '../store/todosReducer';

export const SelectTab = ({ setTab, tab }) => (
  <div onChange={(e) => setTab(e.target.value)}>
    actual
    <input type="radio" value={Tab.actual} checked={tab === Tab.actual}></input>
    done
    <input type="radio" value={Tab.done} checked={tab === Tab.done}></input>
  </div>
);
