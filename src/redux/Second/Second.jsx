import React from 'react';

export const SecondComponent = ({ counter, increment }) => {
  return (
    <div>
      <button onClick={increment}>Inc</button>
      {counter}
    </div>
  );
};
