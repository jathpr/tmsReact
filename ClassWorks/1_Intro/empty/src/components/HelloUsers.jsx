import React from 'react';
import { Hello } from './Hello';

export const HelloUsers = ({ users }) =>
  users.map((user) => <Hello name={user.name} key={user.name} className={user.name} check={user.age > 30} />);
