/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLogin = state => state.get('login', initialState);

const makeSelect__user_name = () =>
  createSelector(selectLogin, loginState => loginState.get('user_name'));

const makeSelect__password = () =>
  createSelector(selectLogin, loginState => loginState.get('password'));

const makeSelect__is_authenticated = () =>
  createSelector(selectLogin, loginState => loginState.get('is_authenticated'));

export { selectLogin, makeSelect__user_name, makeSelect__password, makeSelect__is_authenticated };
