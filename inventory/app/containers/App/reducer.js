/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from "immutable";

import {
  /************************************************** 授权相关 start ********************************************************************************/

    ACTION__IS_AUTHENTICATED_FAILURE, ACTION__IS_AUTHENTICATED_SUCCESS,
  /************************************************** 授权相关 end *********************************************************************************/
    LOAD_REPOS, LOAD_REPOS_ERROR, LOAD_REPOS_SUCCESS
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading : false,
  error : false,
  currentUser : false, //no use
  is_authenticated : false,
  user_name : '',
  userData : {
    repositories : false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn([ 'userData', 'repositories' ], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn([ 'userData', 'repositories' ], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case   ACTION__IS_AUTHENTICATED_SUCCESS:
      return state.set('is_authenticated', true);
    case ACTION__IS_AUTHENTICATED_FAILURE:
      return state.set('is_authenticated', false);
    default:
      return state;
  }
}

export default appReducer;
