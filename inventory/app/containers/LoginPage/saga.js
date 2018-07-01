/**
 * Gets data from server
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_LOGIN } from "./constants";
import { api_login_error, api_login_success } from "./actions";
import { action__is_authenticated_success, action__is_authenticated_failure  } from "containers/App/actions";

import { options_common, request } from "utils/request";
import { makeSelect__password, makeSelect__user_name } from "./selectors";

/**
 * Github repos request/response handler
 */
export function* api_request() {
  // Select username from store
  const user_name = yield select(makeSelect__user_name());
  const password = yield select(makeSelect__password());

  const bodyObj = {
    user_name,
    password
  };
  const requestURL = CONFIG.API_BASE_URL+REQ_URL.REQ_URL___user__login;

  try {
    // Call our request helper (see 'utils/request')
    const jsonObj = yield call(request, requestURL, options_common(bodyObj));
    if (jsonObj.code == 0) {
      jsonObj.data.user_name = user_name;
      yield put(api_login_success(jsonObj));
      yield put(action__is_authenticated_success(jsonObj));

    } else {
      let err = jsonObj.msg;
      yield put(api_login_error(err));
      yield put(action__is_authenticated_failure());

    }
  } catch (err) {
    yield put(api_login_error(err));
    yield put(action__is_authenticated_failure());

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
  yield takeLatest(API_LOGIN, api_request);
}
