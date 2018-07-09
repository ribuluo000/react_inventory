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

  RESET_Bill_Add,
  CHANGE_INPUT_VALUE_BILL_TYPE,
  CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT,
  CHANGE_INPUT_VALUE_REMARK,
  CHANGE_SELECTED_PROVIDER,
  CHANGE_SELECTED_CUSTOMER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,

} from "./constants";


/**
 * RESET_Bill_Add
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of RESET_Bill_Add
 */
export function reset_bill_add(payload) {
  return {
    type: RESET_Bill_Add,
    payload,
  };
}

/**
 * CHANGE_INPUT_VALUE_BILL_TYPE
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_INPUT_VALUE_BILL_TYPE
 */
export function change_input_value_bill_type(payload) {
  return {
    type: CHANGE_INPUT_VALUE_BILL_TYPE,
    payload,
  };
}



/**
 * CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT
 */
export function change_input_value_transaction_amount(payload) {
  return {
    type: CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT,
    payload,
  };
}


/**
 * CHANGE_INPUT_VALUE_REMARK
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_INPUT_VALUE_REMARK
 */
export function change_input_value_remark(payload) {
  return {
    type: CHANGE_INPUT_VALUE_REMARK,
    payload,
  };
}




/**
 * CHANGE_SELECTED_PROVIDER
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_PROVIDER
 */
export function change_selected_provider(payload) {
  return {
    type: CHANGE_SELECTED_PROVIDER,
    payload,
  };
}



/**
 * CHANGE_SELECTED_CUSTOMER
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_CUSTOMER
 */
export function change_selected_customer(payload) {
  return {
    type: CHANGE_SELECTED_CUSTOMER,
    payload,
  };
}


/**
 * ADD_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of ADD_PRODUCT
 */
export function add_product(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}


/**
 * REMOVE_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of REMOVE_PRODUCT
 */
export function remove_product(payload) {
  return {
    type: REMOVE_PRODUCT,
    payload,
  };
}







