import {combineReducers} from 'redux';
import authReducer from './GernalReducer';
export default combineReducers({auth: authReducer})