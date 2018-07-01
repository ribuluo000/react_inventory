/*
 * Actions
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
  CHANGE_NAME,
  CHANGE_REMARK,
  CHANGE_TELEPHONE,

  /****************************** network start **************************************/


  API_ADD,
  API_ADD_SUCCESS,
  API_ADD_ERROR,
  /****************************** network end **************************************/

} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {value} value The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_NAME
 */
export function change_name(value) {
  return {
    type: CHANGE_NAME,
    value,
  };
}
/**
 * Changes the input field of the form
 *
 * @param  {value} value The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_REMARK
 */
export function change_remark(value) {
  return {
    type: CHANGE_REMARK,
    value,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {value} value The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TELEPHONE
 */
export function change_telephone(value) {
  return {
    type: CHANGE_TELEPHONE,
    value,
  };
}

/****************************** network start **************************************/

/**
 * fetch the interface login, this action starts the request saga
 *
 * @return {object} An action object with a type of API_ADD
 */
export function api_add() {
  return {
    type: API_ADD,
  };
}

/**
 * Dispatched when the jsonObj are loaded by the request saga
 *
 * @param  {object} jsonObj The data come from the server
 *
 * @return {object}      An action object with a type of API_ADD_SUCCESS passing the repos
 */
export function api_add_success(jsonObj) {
  return {
    type: API_ADD_SUCCESS,
    jsonObj,
  };
}

/**
 * Dispatched when loading the jsonObj fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of API_ADD_ERROR passing the error
 */
export function api_add_error(error) {
  return {
    type: API_ADD_ERROR,
    error,
  };
}


/****************************** network end **************************************/


