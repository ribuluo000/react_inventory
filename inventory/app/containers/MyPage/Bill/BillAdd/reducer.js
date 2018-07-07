/*
 * loginReducer
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

  RESET_Bill_Add,
  CHANGE_SELECTED_PROVIDER,
  CHANGE_SELECTED_CUSTOMER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,

} from "./constants";

// The initial state of the App
export const initialState = fromJS({

  /**
   {
    "object_id" : "object_id",
    "name" : "name"
  }
   */
  "provider" : {
    "object_id" : "",
    "name" : ""
  },

  /**
   {
    "object_id" : "object_id",
    "name" : "name"
  }
   */
  "customer" : {
    "object_id" : "",
    "name" : ""
  },

  /**

   [{
  "object_id_product" : "object_id_product",
  "object_id_batch" : "object_id_batch",
  "name_product" : "name_product",
  "name_batch" : "name_batch",
  "remark" : "remark",
  "price" : 10,
  "count" : 10,
  "total_price" : 100
}]

   */
  "products" : [

  ]
});

function myReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_Bill_Add:
      state = initialState;

      return state;
      break;
    case CHANGE_SELECTED_PROVIDER:
    {
      let payload = action.payload;
      let name = payload.getIn(['item','name']);
      let _id = payload.getIn(['item','_id']);
      let provider = IMap({
        name,
        object_id:_id,
      });
      return state
        .set('provider', provider);
    }
      break;
    case CHANGE_SELECTED_CUSTOMER:
    {
      let payload = action.payload;
      let name = payload.getIn(['item','name']);
      let _id = payload.getIn(['item','_id']);
      let customer = IMap({
        name,
        object_id:_id,
      });
      return state
        .set('customer', customer);
    }
      break;
    case ADD_PRODUCT:
      let payload = action.payload;

      break;
    case REMOVE_PRODUCT:
      break;

    default:
      return state;
  }
}

export default myReducer;
