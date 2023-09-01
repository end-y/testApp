// store.js
import { createStore, combineReducers } from 'redux';
import blogCountReducer from './Reducer-Counter';

const rootReducer = combineReducers({
  blogCount: blogCountReducer
});

const store = createStore(rootReducer);

export default store;