/**
 * Gets data from server
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_GET_LIST } from "./constants";
import { api_get_list_error, api_get_list_success,reset_view } from "./actions";

import { options_common, request,onCustomException_common,onCatch_common,onSuccess_common } from "utils/request";
import { makeSelect__access_token, makeSelect__user_id } from "containers/App/selectors";
import { makeSelect__search_key,makeSelect__page_number } from "./selectors";

/**
 * Github repos request/response handler
 */
export function* api_request() {
  // Select search_key from store
  const search_key = yield select(makeSelect__search_key());
  const page_number = yield select(makeSelect__page_number());
  const page_size = 1;

  const access_token = yield select(makeSelect__access_token());
  const user_id = yield select(makeSelect__user_id());

  const bodyObj = {
    access_token,
    user_id,
    search_key,
    page_number,
    page_size,
  };
  const requestURL = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___provider__get_list;

  try {
    // Call our request helper (see 'utils/request')
    const jsonObj = yield call(request, requestURL, options_common(bodyObj));
    if (jsonObj.code == 0) {
      yield put(api_get_list_success(jsonObj));
      // onSuccess_common(jsonObj);
      // yield put(reset_view());

    } else {
      let err = jsonObj.msg;
      yield put(api_get_list_error(err));
      onCustomException_common(jsonObj);
    }
  } catch (err) {
    yield put(api_get_list_error(err));
    onCatch_common(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(API_GET_LIST, api_request);
}
