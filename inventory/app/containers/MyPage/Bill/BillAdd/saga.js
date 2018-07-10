/**
 * Root saga manages watcher lifecycle
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_BILL_ADD } from "./constants";
import { api_bill_add_error, api_bill_add_success } from "./actions";
import {
  makeSelect__access_token,
  makeSelect__user_id,
} from "containers/App/selectors";

import { bill_add,request_common,on_custom_exception_common,on_success_common,on_catch_common } from "api/api_util";
import {
  makeSelect__provider,
  makeSelect__customer,
  makeSelect__products,
  makeSelect__input_value_bill_type,
  makeSelect__input_value_transaction_amount,
  makeSelect__input_value_remark,
} from "./selectors";
import my_decimal_util from "util/my_decimal_util";
import { options_common, request,onCustomException_common,onCatch_common } from "utils/request";

/**
 * Github repos request/response handler
 */
export function* api_request() {
  // Select username from store
  const access_token = yield select(makeSelect__access_token());
  const user_id = yield select(makeSelect__user_id());
  const type = yield select(makeSelect__input_value_bill_type());
  const remark = yield select(makeSelect__input_value_remark());
  const transaction_amount_string = yield select(makeSelect__input_value_transaction_amount());
  const provider = yield select(makeSelect__provider());
  const products = yield select(makeSelect__products());
  const customer = yield select(makeSelect__customer());
  try {

  const transaction_amount = my_decimal_util.get_decimal_from_string(transaction_amount_string);

  /**

   {
  	"access_token":"access_token",
  	"user_id":"5b31b58fdd66b03a1dcb5434",
	"type":"1",
	"remark":"remark",
	"transaction_amount":{
                "$numberDecimal": "100"
            },
	"provider":{
	"object_id":"5b325d4d4aea1c5bc15a3dee",
	"name":"name22346"
	},

	"products":[
	{
		"object_id_product":"5b327781bf5abe6fe4f38c6d",
		"object_id_batch":"5b32d3921d6a0f09ff89764d",
		"name_product":"name2",
		"name_batch":"name2",
		"remark":"remark",
		"price":{
                "$numberDecimal": "10"
            },
		"count":{
                "$numberDecimal": "10"
            },
		"total_price":{
                "$numberDecimal": "100"
            }
	}
	]


}

   *
   */
  const bodyObj = {
    access_token,
    user_id,
    type,
    remark,
    transaction_amount,
    products,
  };

  if(type == '1'){
    bodyObj.provider = provider;
  }else if(type == '2'){
    bodyObj.customer = customer;
  }

    const url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___bill__add;
    const jsonObj = yield call(request, url,options_common(bodyObj));

    console.log('jsonObj',jsonObj);

    return ;

    if (jsonObj.code == 0) {
      yield put(api_bill_add_success(jsonObj));
    } else {
      let err = jsonObj.msg;
      yield put(api_bill_add_error(err));
      onCustomException_common(jsonObj);

    }
  } catch (err) {
    yield put(api_bill_add_error(err));
    onCatch_common(err);

  }
}

export default function* getData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(API_BILL_ADD, api_request);

}
