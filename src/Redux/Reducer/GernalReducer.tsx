import { Alert } from 'react-native';
import {FETCH_DATA,API_REQUEST} from '../Constants';

const INTIAL_STATE = {
  users: [],
  loading: false
};

const authReducer = (state = INTIAL_STATE, action: any) => {
  switch (action.type) {
    case API_REQUEST:
      return{
        ...state,
        loading: true
      }
    case FETCH_DATA:

      return {
        ...state,
        loading:false,
        users: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
