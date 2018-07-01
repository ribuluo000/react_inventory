/**
 * Gets data from server
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_ADD } from "./constants";
import { api_add_error, api_add_success } from "./actions";

import { options_common, request,onCustomException_common,onCatch_common } from "utils/request";
import { makeSelect__access_token, makeSelect__user_id } from "containers/App/selectors";
import { makeSelect__name, makeSelect__remark, makeSelect__telephone } from "./selectors";

/**
 * Github repos request/response handler
 */
export function* api_request() {
  // Select username from store
  const name = yield select(makeSelect__name());
  const remark = yield select(makeSelect__remark());
  const telephone = yield select(makeSelect__telephone());
  const access_token = yield select(makeSelect__access_token());
  const user_id = yield select(makeSelect__user_id());

  const bodyObj = {
    access_token,
    user_id,
    name,
    remark,
    telephone,
  };
  const requestURL = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___provider__add;

  try {
    // Call our request helper (see 'utils/request')
    const jsonObj = yield call(request, requestURL, options_common(bodyObj));
    if (jsonObj.code == 0) {
      yield put(api_add_success(jsonObj));

    } else {
      let err = jsonObj.msg;
      yield put(api_add_error(err));
      onCustomException_common(jsonObj);
    }
  } catch (err) {
    yield put(api_add_error(err));
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
  yield takeLatest(API_ADD, api_request);
}
