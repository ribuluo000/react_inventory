/*
 *  Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */


import {

  RESET_BILL_ADD_ADD_PRODUCT,
  CHANGE_SELECTED_PRODUCT,
  CHANGE_SELECTED_BATCH,

} from "./constants";


/**
 * RESET_BILL_ADD_ADD_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of RESET_BILL_ADD_ADD_PRODUCT
 */
export function reset_bill_add_add_product(payload) {
  return {
    type: RESET_BILL_ADD_ADD_PRODUCT,
    payload,
  };
}

/**
 * CHANGE_SELECTED_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_PRODUCT
 */
export function change_selected_product(payload) {
  return {
    type: CHANGE_SELECTED_PRODUCT,
    payload,
  };
}


/**
 * CHANGE_SELECTED_BATCH
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_BATCH
 */
export function change_selected_batch(payload) {
  return {
    type: CHANGE_SELECTED_BATCH,
    payload,
  };
}




