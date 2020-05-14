import React from 'react';
import { Hello } from './Hello';

const names = ['Alex', 'Liza', 'Bob'];
export const HelloNames = () => names.map((nameProp) => <Hello name={nameProp} key={nameProp} />);
