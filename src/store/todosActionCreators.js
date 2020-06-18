import * as types from './ActionTypes';

export const addTodo = (todo) => ({ type: types.ADD_TODO, todo });

export const getTodos = () => {
  return async (dispatch) => {
    dispatch(getTodosStarted());

    const resp = await fetch('http://localhost:3004/todos');
    const data = await resp.json();
    dispatch(setTodos(data));
  };
};

const setTodos = (todos) => ({ type: types.SET_TODOS, todos });
const getTodosStarted = () => ({ type: types.GET_TODOS });

export const setDone = (id) => ({ type: types.SET_TODO_DONE, id });
export const setTab = (tab) => ({ type: types.SET_TAB, tab });
