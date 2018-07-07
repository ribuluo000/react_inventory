import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectBillAddAddProduct = state => state.get(PATH.PATH__bill__add__add_product, initialState);


const makeSelect__product = () =>
  createSelector(selectBillAddAddProduct, state => state.get('product'));
const makeSelect__batch = () =>
  createSelector(selectBillAddAddProduct, state => state.get('batch'));

export {
  selectBillAddAddProduct,
  makeSelect__product,
  makeSelect__batch,
};
