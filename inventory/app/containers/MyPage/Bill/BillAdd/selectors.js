import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectBillAdd = state => state.get(PATH.PATH__bill__add, initialState);

const makeSelect__provider = () =>
  createSelector(selectBillAdd, state => state.get('provider'));
const makeSelect__customer = () =>
  createSelector(selectBillAdd, state => state.get('customer'));
const makeSelect__products = () =>
  createSelector(selectBillAdd, state => state.get('products'));
const makeSelect__input_value_bill_type = () =>
  createSelector(selectBillAdd, state => state.get('input_value_bill_type'));
const makeSelect__input_value_transaction_amount = () =>
  createSelector(selectBillAdd, state => state.get('input_value_transaction_amount'));
const makeSelect__input_value_remark = () =>
  createSelector(selectBillAdd, state => state.get('input_value_remark'));

export {
  selectBillAdd,
  makeSelect__provider,
  makeSelect__customer,
  makeSelect__products,
  makeSelect__input_value_bill_type,
  makeSelect__input_value_transaction_amount,
  makeSelect__input_value_remark,
};
