export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'
export interface IChangeActiveTab {
  type: typeof CHANGE_ACTIVE_TAB,
  payload: string
}

export const HANDLE_SERVER_ERROR = 'HANDLE_SERVER_ERROR'
export interface IHandleServerError {
  type: typeof HANDLE_SERVER_ERROR,
}

export type IPanelTypes =
| IChangeActiveTab
| IHandleServerError
