import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const Example = ({ match }) => {
  return (
    <>
      <div>Example </div>
      <li>
        <Link to={`${match.url}/one`}>First</Link>
      </li>
      <li>
        <Link to={`${match.url}/two`}>Second</Link>
      </li>
      <li>
        <Link to={`${match.url}/zero`}>Seven</Link>
      </li>
      <Route path={`${match.url}/:idNext`} component={ExBody}></Route>
    </>
  );
};

const ExBody = ({ match }) => {
  console.log('ExBody -> match', match);
  return <div>{match.params.idNext}</div>;
};
