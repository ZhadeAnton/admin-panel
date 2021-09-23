import { takeLatest, call, all } from 'redux-saga/effects'

// import * as actions from './authActionCreators'
import * as types from './authActionTypes'
import * as API from '../../API/loginAPI'

function* logIn({ payload }) {
  try {
    const response = yield call(API.logIn, payload)
    console.log(response)
  } catch (error) {
    console.error(error)
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
