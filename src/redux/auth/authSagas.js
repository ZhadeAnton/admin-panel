import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './authActionCreators'
import * as types from './authActionTypes'
import * as API from '../../API/loginAPI'

function* logIn({ payload }) {
  try {
    const response = yield call(API.logIn, payload)
    const data = yield response.data
    const authSuccess = yield {
      accessToken: data.access_token,
      expiresIn: data.expires_in,
      refreshToken: data.refresh_token,
      tokenType: data.token_type,
      userId: data.user_id
    }
    yield put(actions.logInSuccess(authSuccess))
  } catch (error) {
    yield put(actions.logInFailure(error.message))
  }
}

function* onAuth() {
  yield takeLatest(types.LOG_IN, logIn)
}

export default function* authSagas() {
  yield all([
    call(onAuth)
  ])
}
