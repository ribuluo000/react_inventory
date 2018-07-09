/*
 * App Actions
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

  RESET_APP,
  /************************************************** 授权相关 start ********************************************************************************/

    ACTION__IS_AUTHENTICATED_FAILURE, ACTION__IS_AUTHENTICATED_SUCCESS,
  /************************************************** 授权相关 end ********************************************************************************/

    LOAD_REPOS, LOAD_REPOS_ERROR, LOAD_REPOS_SUCCESS
} from "./constants";



/**
 * RESET_APP
 *
 * @param  {data} data The new data of the app
 *
 * @return {object}    An action object with a type of RESET_APP
 */
export function reset_app(data) {
  return {
    type: RESET_APP,
    data,
  };
}


/**
 * this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type : LOAD_REPOS,
  };
}

/**
 * Dispatched when the jsonObj are loaded by the request saga
 *
 * @param  {object} jsonObj The jsonObj data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS
 */
export function reposLoaded(jsonObj) {
  return {
    type : LOAD_REPOS_SUCCESS,
    jsonObj,
  };
}

/**
 * Dispatched when loading fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type : LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Dispatched when ACTION__IS_AUTHENTICATED_SUCCESS
 *
 *
 * @return {object}       An action object with a type of ACTION__IS_AUTHENTICATED_SUCCESS
 */
export function action__is_authenticated_success(jsonObj) {
  return {
    type : ACTION__IS_AUTHENTICATED_SUCCESS,
    jsonObj,
  };
}

/**
 * Dispatched when ACTION__IS_AUTHENTICATED_FAILURE
 *
 *
 * @return {object}       An action object with a type of ACTION__IS_AUTHENTICATED_FAILURE
 */
export function action__is_authenticated_failure() {
  return {
    type : ACTION__IS_AUTHENTICATED_FAILURE,
  };
}
