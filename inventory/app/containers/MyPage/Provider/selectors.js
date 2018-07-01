/**
 * selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const select = state => state.get(PATH.PATH__provider, initialState);

const makeSelect__search_key = () =>
  createSelector(select, state => state.get('search_key'));
const makeSelect__page_number = () =>
  createSelector(select, state => state.get('page_number'));
const makeSelect__has_more = () =>
  createSelector(select, state => state.get('has_more'));
const makeSelect__data = () =>
  createSelector(select, state => state.get('data'));

export { select, makeSelect__search_key, makeSelect__page_number, makeSelect__has_more,makeSelect__data };
