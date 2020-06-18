import { ADD_USER, DELETE_USER, SET_USERS, UPDATE_USER } from '../constants/ActionTypes';

export const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case ADD_USER:
      return [...state, action.user];
    case DELETE_USER:
      return state.users.filter((user) => user.id !== action.payload);
    case UPDATE_USER:
      return state.users.map((user) => (user.id !== action.payload.id ? user : action.payload));

    default:
      return state;
  }
};
