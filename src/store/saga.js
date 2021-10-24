import { call, put, takeLatest } from 'redux-saga/effects'
import { logIn } from '../services/authService'
import { AUTHORIZATION_FAIL, AUTHORIZATION_SUCCESS } from './actionTypes'

function* logInSaga({ payload }) {
  try {
    const { login, password } = payload
    yield call(logIn, login, password)
    yield put({ type: AUTHORIZATION_SUCCESS, payload: login })
  } catch (error) {
    yield put({ type: AUTHORIZATION_FAIL, payload: error.message, error: true })
  }
}

export default function* () {
  yield takeLatest('LOG_IN', logInSaga)
}
