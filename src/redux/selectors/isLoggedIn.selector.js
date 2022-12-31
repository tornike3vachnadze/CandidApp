import {createSelector} from 'reselect';
const isLoggedin = state => state.isLoggedInReducer;

export const isLoggedInSelector = createSelector(
  [isLoggedin],
  isLOGEEDIN => isLOGEEDIN,
);
