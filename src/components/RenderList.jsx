import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToDoList } from './ToDoList';
import { RemovedList } from './RemovedList';
import { OneItem } from './OneItem';

function RenderList(props) {
  return (
    <Switch>
      <Route path="/item/:id" render={({ match }) => <OneItem items={props.items} id={match.params.id} />} />
      <Route path="/removed" render={() => <RemovedList {...props} />} />
      <Route render={() => <ToDoList {...props} />} />
    </Switch>
  );
}

export { RenderList };
