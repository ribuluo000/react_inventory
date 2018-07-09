import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectBillAddAddProduct = state => state.get(PATH.PATH__bill__add__add_product, initialState);


const makeSelect__product = () =>
  createSelector(selectBillAddAddProduct, state => state.get('product'));
const makeSelect__batch = () =>
  createSelector(selectBillAddAddProduct, state => state.get('batch'));
const makeSelect__price = () =>
  createSelector(selectBillAddAddProduct, state => state.get('price'));
const makeSelect__count = () =>
  createSelector(selectBillAddAddProduct, state => state.get('count'));
const makeSelect__remark = () =>
  createSelector(selectBillAddAddProduct, state => state.get('remark'));
const makeSelect__total_price = () =>
  createSelector(selectBillAddAddProduct, state => state.get('total_price'));

export {
  selectBillAddAddProduct,
  makeSelect__product,
  makeSelect__batch,
  makeSelect__price,
  makeSelect__count,
  makeSelect__remark,
  makeSelect__total_price,
};
