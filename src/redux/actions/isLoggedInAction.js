import * as actionTypes from './actionTypes';

export const isLoggedInAction = item => ({
  type: actionTypes.IS_LOGGED_IN,
  payload: item,
});
