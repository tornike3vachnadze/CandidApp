import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
};

const isLoggedInReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.IS_LOGGED_IN:
      return {
        isLoggedIn: action.payload.isLoggedIn,
      };

    default:
      return state;
  }
};

export default isLoggedInReducer;
