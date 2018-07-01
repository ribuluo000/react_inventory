/**
 * ProviderAdd selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const select = state => state.get(PATH.PATH__provider__add, initialState);

const makeSelect__name = () =>
  createSelector(select, state => state.get('name'));

const makeSelect__remark = () =>
  createSelector(select, state => state.get('remark'));

const makeSelect__telephone = () =>
  createSelector(select, state => state.get('telephone'));

export { select, makeSelect__name, makeSelect__remark, makeSelect__telephone };
