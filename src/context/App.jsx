import React, { useState } from 'react';
import { Context, Context2 } from './Context';
import { Comp } from './Comp';

export const App = () => {
  const [naum, setNaum] = useState(5);
  return (
    <Context.Provider value={{ naum: naum, setNaum: setNaum }}>
      <Context2.Provider value={3}>
        <Comp />
      </Context2.Provider>
    </Context.Provider>
  );
};
