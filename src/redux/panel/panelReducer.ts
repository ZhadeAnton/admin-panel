import * as types from './panelActionTypes'

interface IPanelState {
  activeTab: string,
  isServerError: boolean
}

const INIT_STATE: IPanelState = {
  activeTab: '2',
  isServerError: false
}

const panelReducer = (state = INIT_STATE, action: types.IPanelTypes): IPanelState => {
  switch (action.type) {
    case types.CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }

    case types.HANDLE_SERVER_ERROR:
      return {
        ...state,
        isServerError: true
      }

    default:
      return state
  }
}

export default panelReducer
