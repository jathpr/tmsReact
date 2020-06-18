import { ADD_TODO, SET_TODOS, GET_TODOS, SET_TODO_DONE, SET_TAB } from './ActionTypes';

const State = { initial: 0, loading: 1, loaded: 2 };

export const Tab = { done: '0', actual: '1' };

const initialState = { list: [], state: State.initial, tab: Tab.actual };

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, list: action.todos, state: State.loaded };
    case ADD_TODO:
      return { ...state, list: [...state.list, action.todo] };
    case SET_TODO_DONE:
      return {
        ...state,
        list: state.list.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
      };
    case GET_TODOS:
      return { ...state, state: State.loading };
    case SET_TAB:
      return { ...state, tab: action.tab };
    default:
      return state;
  }
};
