import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Main } from '../../pages/Main';
import { getUsers } from '../../state/requests';

export const ContentComponent = ({ setUsers, isLoged }) => {
  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, [setUsers]);

  return (
    <Switch>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      {!isLoged && <Redirect to="/login" />}
      <Route path="/main" component={<Main />}></Route>
    </Switch>
  );
};
