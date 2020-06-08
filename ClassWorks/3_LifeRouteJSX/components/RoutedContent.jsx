import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import { Example } from './Example';

export const RoutedContent = () => (
  <Switch>
    <Route path="/about" component={About}></Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="/redirect">
      <RedirectPage />
    </Route>
    <Route path="/example" render={({ match }) => <Example match={match} />}></Route>
    <Route path="/" component={Home} />
  </Switch>
);

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function RedirectPage() {
  return (
    <div>
      <h2 className={`always ${this.state.checked ? 'chk' : 'unchk'} ${this.state.checked && 'chk'}`}>Redirect</h2>
      <Redirect to="/about" />
    </div>
  );
}
