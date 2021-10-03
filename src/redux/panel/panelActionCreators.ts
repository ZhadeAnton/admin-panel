import * as types from './panelActionTypes'

export const changeActiveTab = (activeTab: string): types.IChangeActiveTab => ({
  type: types.CHANGE_ACTIVE_TAB,
  payload: activeTab
})

export const handleServerError = (): types.IHandleServerError => ({
  type: types.HANDLE_SERVER_ERROR
})
