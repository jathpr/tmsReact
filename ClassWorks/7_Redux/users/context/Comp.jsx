import React, { useContext } from 'react';
import { Context, Context2 } from './Context';

export const Comp = () => {
  const value = useContext(Context);
  const number2 = useContext(Context2);
  value.setNaum(8);
  return <div>Comp {number + number2}</div>;
};
