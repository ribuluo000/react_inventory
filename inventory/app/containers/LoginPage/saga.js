/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { API_LOGIN_URL } from "utils/constant_api_url";
import { API_LOGIN } from "./constants";
import { api_login_error, api_login_success } from "./actions";

import { options_common, request } from "utils/request";
import { makeSelect_password, makeSelect_user_name } from "./selectors";

/**
 * Github repos request/response handler
 */
export function* api_request() {
  // Select username from store
  const user_name = yield select(makeSelect_user_name());
  const password = yield select(makeSelect_password());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  const bodyObj = {
    user_name,
    password
  };
  const requestURL = API_LOGIN_URL;

  try {
    // Call our request helper (see 'utils/request')
    const jsonObj = yield call(request, requestURL, options_common(bodyObj));
    if (jsonObj.code === 0) {
      yield put(api_login_success(jsonObj));

    } else {
      let err = jsonObj.msg;
      yield put(api_login_error(err));

    }
  } catch (err) {
    yield put(api_login_error(err));
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
