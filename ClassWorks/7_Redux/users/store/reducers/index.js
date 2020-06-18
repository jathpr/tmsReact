import { combineReducers } from 'redux';
import { login } from './login';
import { users } from './users';

export const rootReducer = combineReducers({
  login,
  users,
});
