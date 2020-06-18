import { Tab } from './todosReducer';

export const getTabTodos = (state) => {
  const done = state.tab === Tab.done;
  return state.list.filter((todo) => todo.done === done);
};
