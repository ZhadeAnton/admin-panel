import * as types from './panelActionTypes'

export const changeActiveTab = (activeTab: string): types.IChangeActiveTab => ({
  type: types.CHANGE_ACTIVE_TAB,
  payload: activeTab
})
