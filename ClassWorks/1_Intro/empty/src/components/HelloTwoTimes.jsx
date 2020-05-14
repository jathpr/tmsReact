
import React from 'react';
import { Hello } from './Hello';

export function HelloTwoTimes() {
  const rows = [];

  for (let i = 0; i < 2; i++) {
    rows[i] = <Hello />;
  }

  return rows;
}
