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

import { CHANGE_SELECTED_BATCH, CHANGE_SELECTED_PRODUCT, RESET_BILL_ADD_ADD_PRODUCT } from "./constants";

// The initial state of the App
export const initialState = fromJS({

  "product" : {
    "object_id" : "",
    "name" : ""
  },
  "batch" : {
    "object_id" : "",
    "name" : ""
  },
});

function myReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_BILL_ADD_ADD_PRODUCT:
      state = initialState;

      return state;
      break;
    case CHANGE_SELECTED_PRODUCT: {
      let payload = action.payload;
      let name = payload.getIn([ 'item', 'name' ]);
      let _id = payload.getIn([ 'item', '_id' ]);
      let product = IMap({
        name,
        object_id : _id,
      });
      return state
        .set('product', product);
    }
      break;
    case CHANGE_SELECTED_BATCH: {
      let payload = action.payload;
      let name = payload.getIn([ 'item', 'name' ]);
      let _id = payload.getIn([ 'item', '_id' ]);
      let batch = IMap({
        name,
        object_id : _id,
      });
      return state
        .set('batch', batch);
    }
      break;
    default:
      return state;
  }
}

export default myReducer;
