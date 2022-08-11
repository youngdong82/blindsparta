import {legacy_createStore as createStore, applyMiddleware, combineReducers}from 'redux'
import commentReducer from './modules/commentReducer';
import notionReducer from './modules/notionReducer';
import campReducer from './modules/campReducer';
import signReducer from './modules/signReducer';

// 미들웨어
import thunk from 'redux-thunk';

const middlewares = [thunk];
const rootReducer = combineReducers({notionReducer,commentReducer,campReducer, signReducer});

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer,enhancer);

export default store;