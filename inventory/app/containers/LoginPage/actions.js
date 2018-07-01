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
  RESET_VIEW,
  CHANGE_USER_NAME,
  CHANGE_PASSWORD,

  /****************************** network start **************************************/

    API_LOGIN,
    API_LOGIN_SUCCESS,
    API_LOGIN_ERROR,
  /****************************** network end **************************************/

} from './constants';



/**
 * reset_view
 *
 * @param  {data} data The new data of the view
 *
 * @return {object}    An action object with a type of RESET_VIEW
 */
export function reset_view(data) {
  return {
    type: RESET_VIEW,
    data,
  };
}


/**
 * Changes the input field of the form
 *
 * @param  {user_name} user_name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function change_user_name(user_name) {
  return {
    type: CHANGE_USER_NAME,
    user_name,
  };
}
/**
 * Changes the input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function change_password(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

/****************************** network start **************************************/

/**
 * fetch the interface login, this action starts the request saga
 *
 * @return {object} An action object with a type of API_LOGIN
 */
export function api_login() {
  return {
    type: API_LOGIN,
  };
}

/**
 * Dispatched when the jsonObj are loaded by the request saga
 *
 * @param  {object} jsonObj The data come from the server
 *
 * @return {object}      An action object with a type of API_LOGIN_SUCCESS passing the repos
 */
export function api_login_success(jsonObj) {
  return {
    type: API_LOGIN_SUCCESS,
    jsonObj,
  };
}

/**
 * Dispatched when loading the jsonObj fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of API_LOGIN_ERROR passing the error
 */
export function api_login_error(error) {
  return {
    type: API_LOGIN_ERROR,
    error,
  };
}


/****************************** network end **************************************/


