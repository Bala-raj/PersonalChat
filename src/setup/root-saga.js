import { fork } from 'redux-saga/effects';

import login from '../login/login-saga';

export default function* rootSaga() {
  yield [
    fork(login),
  ];
}
