import {legacy_createStore as createStore, applyMiddleware, combineReducers}from 'redux'
import commentReducer from './modules/commentReducer';
import notionReducer from './modules/notionReducer';
import campReducer from './modules/campReducer';

const middlewares = [];
const rootReducer = combineReducers({notionReducer,commentReducer,campReducer});

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer,enhancer);

export default store;