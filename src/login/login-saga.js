import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

function* doFetchUserDetails() {
  try {

  } catch (e) {
    console.error("Exception on doFetchUserDetails : ",e); // eslint-disable-line   
  }
}

export default function* doFetchUserDetailsSaga() {
  yield takeEvery(FETCH.REQUEST, doFetchUserDetails);
}
