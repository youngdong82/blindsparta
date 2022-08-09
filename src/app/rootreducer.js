import { combineReducers } from 'redux';
import signReducer from '../features/sign/signSlice';


const rootReducer = combineReducers({sign : signReducer});

export default rootReducer;