import React from 'react';

function OneItem({ items, id }) {
  return <div>{items.find((item) => item.id === +id).name}</div>;
}

export { OneItem };
