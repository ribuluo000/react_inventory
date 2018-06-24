/**
 * Homepage selectors
 */

import { createSelector } from "reselect";

const selectLogin = state => state.get('login');

const makeSelect_user_name = () =>
  createSelector(selectLogin, loginState => loginState.get('user_name'));

export { selectLogin, makeSelect_user_name };
