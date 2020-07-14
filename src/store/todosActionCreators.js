import * as types from './ActionTypes';

export const addTodo = (todo) => ({ type: types.ADD_TODO, todo });

export const getTodos = () => {
  return async (dispatch) => {
    dispatch(getTodosStarted());

    const todoUrl = new URL('http://localhost:3004/todos');
    const weatehr = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=0f0e60a3594c2453ada35208109c6409'
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }
    );
    console.log('getTodos -> weatehr', weatehr);
    const dat = await weatehr.json();
    console.log('getTodos -> dat', dat);
    todoUrl.searchParams.append('test', 'привет авп');
    const resp = await fetch(todoUrl);
    const data = await resp.json();
    dispatch(setTodos(data));
  };
};

const setTodos = (todos) => ({ type: types.SET_TODOS, todos });
const getTodosStarted = () => ({ type: types.GET_TODOS });

export const setDone = (id) => ({ type: types.SET_TODO_DONE, id });
export const setTab = (tab) => ({ type: types.SET_TAB, tab });
