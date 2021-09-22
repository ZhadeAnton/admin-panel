import * as types from './panelActionTypes'

interface IPanelState {
  activeTab: string
}

const INIT_STATE: IPanelState = {
  activeTab: '2'
}

const panelReducer = (state = INIT_STATE, action: types.IPanelTypes): IPanelState => {
  switch (action.type) {
    case types.CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }

    default:
      return state
  }
}

export default panelReducer
