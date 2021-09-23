import * as types from './authActionTypes'

interface IAuthState {
}

const INIT_STATE: IAuthState = {

}

const authReducer = (state = INIT_STATE, action: types.IAuthTypes): IAuthState => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
