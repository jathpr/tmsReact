import { SET_USER } from '../constants/ActionTypes';

export const login = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.user };

    default:
      return state;
  }
};
