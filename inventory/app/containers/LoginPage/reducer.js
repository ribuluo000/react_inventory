/*
 *
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
  /********************************************************* network start ******************************************************************/

    API_LOGIN, API_LOGIN_ERROR, API_LOGIN_SUCCESS,
  /********************************************************** network end ******************************************************************/


    CHANGE_PASSWORD, CHANGE_USER_NAME
} from "./constants";

// The initial state of the App
export const initialState = fromJS({
  user_name : '',
  password : '',
  is_authenticated : false,

  /****************************** network start **************************************/

  loading : false,
  error : false,
  data_user : {
    access_token : '',
    user_id : '',
  },
  /****************************** network end **************************************/

});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return state.set('user_name', action.user_name.replace(/@/gi, ''));
    case CHANGE_PASSWORD:
      return state.set('password', action.password.replace(/@/gi, ''));

    /****************************** network start **************************************/

    case API_LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('is_authenticated', false)
        .set('data_user', {
          access_token : '',
          user_id : '',
        });
    case API_LOGIN_SUCCESS:
      let { access_token, user_id } = action.jsonObj.data;
      return state
        .set('data_user', {
          access_token : access_token,
          user_id : user_id,
        })
        .set('is_authenticated', true)
        .set('loading', false);
    case API_LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('is_authenticated', false)
        .set('data_user', {
          access_token : '',
          user_id : '',
        });

    /****************************** network end **************************************/

    default:
      return state;
  }
}

export default loginReducer;
