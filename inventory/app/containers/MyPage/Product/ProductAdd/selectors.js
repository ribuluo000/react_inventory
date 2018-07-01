/**
 * selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const select = state => state.get(PATH.PATH__product__add, initialState);

const makeSelect__name = () =>
  createSelector(select, state => state.get('name'));

const makeSelect__remark = () =>
  createSelector(select, state => state.get('remark'));


export { select, makeSelect__name, makeSelect__remark, };
