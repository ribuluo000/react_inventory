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
  CHANGE_NAME,
  CHANGE_REMARK,
  CHANGE_TELEPHONE,

  /****************************** network start **************************************/

  API_ADD,
  API_ADD_SUCCESS,
  API_ADD_ERROR,
  /****************************** network end **************************************/

} from './constants';

// The initial state of the App
export const initialState = fromJS({
  name:'',
  remark:'',
  telephone:'',


  /****************************** network start **************************************/

  loading : false,
  error : false,
  data : {
    id : '',
  },
  /****************************** network end **************************************/

});

function mReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state.set('name', action.value.replace(/@/gi, ''));
    case CHANGE_REMARK:
      return state.set('remark', action.value.replace(/@/gi, ''));
    case CHANGE_TELEPHONE:
      return state.set('telephone', action.value.replace(/@/gi, ''));

    /****************************** network start **************************************/

    case API_ADD:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', {
          id : '',
        });
    case API_ADD_SUCCESS:
      let { id } = action.jsonObj.data;
      return state
        .set('data', {
          id : id,
        })
        .set('loading', false);
    case API_ADD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('data', {
          id : '',
        });

    /****************************** network end **************************************/

    default:
      return state;
  }
}

export default mReducer;
