/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLogin = state => state.get('login', initialState);

const makeSelect_user_name = () =>
  createSelector(selectLogin, loginState => loginState.get('user_name'));

const makeSelect_password = () =>
  createSelector(selectLogin, loginState => loginState.get('password'));

export { selectLogin, makeSelect_user_name, makeSelect_password };
