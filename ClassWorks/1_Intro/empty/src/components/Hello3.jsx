import React from 'react';
import { Hello } from './Hello';

export function Hello3() {
  const templateArray = new Array(3).fill(0);

  return templateArray.map(() => <Hello />);
}
