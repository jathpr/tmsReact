import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink
        exact
        to=""
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        Active
      </NavLink>
      <NavLink
        to="removed"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        Removed
      </NavLink>
    </>
  );
}

export { Menu };
