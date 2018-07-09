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
  CHANGE_SELECTED_BATCH,
  CHANGE_SELECTED_PRODUCT,
  RESET_BILL_ADD_ADD_PRODUCT,
  CHANGE_INPUT_VALUE_PRICE,
  CHANGE_INPUT_VALUE_COUNT,
  CHANGE_INPUT_VALUE_REMARK,
} from "./constants";
import my_decimal_util from "../../../../../util/my_decimal_util";

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
  "price":"",
  "total_price":"",
  "count":"",
  "remark":"",
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
    case CHANGE_INPUT_VALUE_PRICE: {
      let payload = action.payload;
      let total_price = '';
      let count = state.get('count');
      if(count.length>0){
        total_price = my_decimal_util.get_decimal_x_mul_y(count,payload).toString();
      }
      console.log(state);

      return state
        .set('price', payload)
        .set('total_price', total_price)
        ;
    }
      break;
    case CHANGE_INPUT_VALUE_COUNT: {
      let payload = action.payload;
      let total_price = '';
      let price = state.get('price');
      if(price.length>0){
        total_price = my_decimal_util.get_decimal_x_mul_y(price,payload).toString();
      }
      return state
        .set('count', payload)
        .set('total_price', total_price)
        ;
    }
      break;
    case CHANGE_INPUT_VALUE_REMARK: {
      let payload = action.payload;
      return state
        .set('remark', payload);
    }
      break;
    default:
      return state;
  }
}

export default myReducer;
