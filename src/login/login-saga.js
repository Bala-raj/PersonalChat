import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import firebase from 'firebase';
import DeviceInfo from 'react-native-device-info';

import * as ACTIONS from './login-actions';
import rsf from '../setup/firebase';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* doFetchUserDetails() {
  try {
    const state = yield select();
    const { name, avatar } = state.user;

    const data = yield call(rsf.signInAnonymously, authProvider);

    yield call(rsf.update, `users/${DeviceInfo.getUniqueID()}`, {
      name,
      avatar,
    });

    yield put({ type: ACTIONS.USER_AUTHORIZED, data });
  } catch (e) {
console.error("Exception on doFetchUserDetails : ",e); // eslint-disable-line   
  }
}

export default function* doFetchUserDetailsSaga() {
  yield takeEvery(ACTIONS.USER_START_AUTHORIZING, doFetchUserDetails);
}
