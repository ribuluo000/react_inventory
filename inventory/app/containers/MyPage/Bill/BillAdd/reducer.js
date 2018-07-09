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

import { CHANGE_INPUT_VALUE_REMARK,CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT,CHANGE_INPUT_VALUE_BILL_TYPE,ADD_PRODUCT, CHANGE_SELECTED_CUSTOMER, CHANGE_SELECTED_PROVIDER, REMOVE_PRODUCT, RESET_Bill_Add } from "./constants";

// The initial state of the App
export const initialState = fromJS({

  /**

   [
   {
     label : please_choose,
     value : '',
   },
   {
     label : receive_money,
     value : '2',
   },
   {
     label : Pay,
     value : '1',
   },
   ];

   */
  input_value_bill_type:'',
  input_value_transaction_amount:'',
  input_value_remark:'',

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
  "products" : []
});

function myReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_Bill_Add:
      state = initialState;

      return state;
      break;
    case CHANGE_INPUT_VALUE_BILL_TYPE: {
      let input_value_bill_type = action.payload;
      return state
        .set('input_value_bill_type', input_value_bill_type);
    }
      break;

    case CHANGE_INPUT_VALUE_TRANSACTION_AMOUNT: {
      let input_value_transaction_amount = action.payload;
      return state
        .set('input_value_transaction_amount', input_value_transaction_amount);
    }
      break;

    case CHANGE_INPUT_VALUE_REMARK: {
      let input_value_remark = action.payload;
      return state
        .set('input_value_remark', input_value_remark);
    }
      break;

    case CHANGE_SELECTED_PROVIDER: {
      let payload = action.payload;
      let name = payload.getIn([ 'item', 'name' ]);
      let _id = payload.getIn([ 'item', '_id' ]);
      let provider = IMap({
        name,
        object_id : _id,
      });
      return state
        .set('provider', provider);
    }
      break;
    case CHANGE_SELECTED_CUSTOMER: {
      let payload = action.payload;
      let name = payload.getIn([ 'item', 'name' ]);
      let _id = payload.getIn([ 'item', '_id' ]);
      let customer = IMap({
        name,
        object_id : _id,
      });
      return state
        .set('customer', customer);
    }
      break;
    case ADD_PRODUCT: {
      let payload = action.payload;
      let products = state.get('products');

      products = products.push(payload);
      state = state
        .set('products', products);
    }

      return state;
      break;
    case REMOVE_PRODUCT: {
      let payload = action.payload;
      let rowID = payload.get('rowID');
      let products = state.get('products');
      products = products.delete(rowID);
      state = state
        .set('products', products);
    }

      return state;
      break;

    default:
      return state;
  }
}

export default myReducer;
