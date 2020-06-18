1. yarn add redux-thunk

2. import { createStore, applyMiddleware } from 'redux';
   import thunk from 'redux-thunk';
   import { rootReducer } from './reducers';
   import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
