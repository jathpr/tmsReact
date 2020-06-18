import * as types from '../constants/ActionTypes';

export const addUser = (user) => ({ type: types.ADD_USER, user });
export const deleteUser = (user) => ({ type: types.DELETE_USER, user });
export const setUser = (user) => ({ type: types.SET_USER, user });
export const setUsers = (users) => ({ type: types.SET_USERS, users });
export const updateUser = (index, user) => ({ type: types.UPDATE_USER, index, user });
