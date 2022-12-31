import {combineReducers} from 'redux';

import isLoggedInReducer from './isLoggedInReducer';

export default combineReducers({
  isLoggedInReducer: isLoggedInReducer,
});
