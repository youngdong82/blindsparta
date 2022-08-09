import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootreducer';
import  ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

const store = createStore(rootReducer, composeEnhancer);

export default store;
