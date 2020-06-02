import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Main } from '../pages/Main';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(' http://localhost:3004/users');
      const data = await responce.json();
      setUsers(data);
    };
    getData();
  });

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const checkUser = (user) => {
    const userIs = users.find((next) => next.login === user.login && next.pass === user.pass);
    if (userIs) {
      setUser(userIs);
    }
  };

  const onLogout = () => setUser(null);

  return (
    <Router>
      <Switch>
        <Route path="/register" render={() => <Register addUser={addUser} />}></Route>
        <Route path="/login" render={() => <Login user={user} checkUser={checkUser} />}></Route>
        {!user && <Redirect to="/login" />}
        <Route path="/main" render={() => <Main users={users} user={user} onLogout={onLogout} />}></Route>
      </Switch>
    </Router>
  );
};
