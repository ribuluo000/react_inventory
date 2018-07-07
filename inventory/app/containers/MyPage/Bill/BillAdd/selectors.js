import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectBillAdd = state => state.get(PATH.PATH__bill__add, initialState);

const makeSelect__provider = () =>
  createSelector(selectBillAdd, state => state.get('provider'));
const makeSelect__customer = () =>
  createSelector(selectBillAdd, state => state.get('customer'));
const makeSelect__products = () =>
  createSelector(selectBillAdd, state => state.get('products'));

export {
  selectBillAdd,
  makeSelect__provider,
  makeSelect__customer,
  makeSelect__products,
};
