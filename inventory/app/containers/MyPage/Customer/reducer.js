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

  /********************************************************** network end ******************************************************************/


} from "./constants";

// The initial state of the App
export const initialState = fromJS({


  /****************************** network start **************************************/


  /****************************** network end **************************************/

});

function myReducer(state = initialState, action) {
  switch (action.type) {

    /****************************** network start **************************************/

    /****************************** network end **************************************/

    default:
      return state;
  }
}

export default myReducer;
