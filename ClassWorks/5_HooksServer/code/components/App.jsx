import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Main } from '../pages/Main';
import { ThemeContext, themes } from '../Styles/Themes';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(' http://localhost:3004/users');
      const data = await responce.json();
      setUsers(data);
    };
    getData();
  }, []);

  const sendData = async (data) => {
    const url = 'http://localhost:3004/users';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setUsers([...users, json]);
    } catch (error) {
      console.error('Ошибка:', error);
    }
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
      <ThemeContext.Provider value={theme}>
        <button
          onClick={() => {
            setTheme(theme === themes.dark ? themes.light : themes.dark);
          }}
          style={{ float: 'right' }}
        >
          Theme
        </button>
        <Switch>
          <Route path="/register" render={() => <Register addUser={sendData} />}></Route>
          <Route path="/login" render={() => <Login user={user} checkUser={checkUser} />}></Route>
          {!user && <Redirect to="/login" />}
          <Route path="/main" render={() => <Main users={users} user={user} onLogout={onLogout} />}></Route>
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
};
