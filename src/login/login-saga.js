import { put, call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import DeviceInfo from 'react-native-device-info';

import * as ACTIONS from './login-actions';
import ReduxSagaFirebase from '../setup/firebase';

function* doFetchUserDetails() {
  try {
    const state = yield select();
    const { name, phoneNumber } = state.user;

    const data = yield call(ReduxSagaFirebase.signInAnonymously);

    const user = yield call(ReduxSagaFirebase.update, `users/${DeviceInfo.getUniqueID()}`, {
      name,
      phoneNumber,
    });

    yield put({ type: ACTIONS.USER_AUTHORIZED, data, user });
  } catch (e) {
console.error("Exception on doFetchUserDetails : ",e); // eslint-disable-line   
  }
}

export default function* doFetchUserDetailsSaga() {
  yield takeEvery(ACTIONS.SEND_CODE, doFetchUserDetails);
}
