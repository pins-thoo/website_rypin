import {
  takeLatest, all, fork, put, delay,
} from 'redux-saga/effects';
import Actions from 'actions';
// import * as api from 'api';

function* signIn({ credentials }) {
  console.log(credentials);
  yield delay(1000);
  yield put(Actions.signInSuccess('fake-token'));
}

function* watchSignIn() {
  yield takeLatest(Actions.SIGN_IN_REQUEST, signIn);
}

export default function* auth() {
  yield all([
    fork(watchSignIn),
  ]);
}
