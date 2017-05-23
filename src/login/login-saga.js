import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import * as ACTIONS from './login-actions';

function* doFetchUserDetails() {
  try {

  } catch (e) {
    console.error("Exception on doFetchUserDetails : ",e); // eslint-disable-line   
  }
}

export default function* doFetchUserDetailsSaga() {
  yield takeEvery(ACTIONS.USER_START_AUTHORIZING, doFetchUserDetails);
}
