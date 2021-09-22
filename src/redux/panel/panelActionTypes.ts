export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'
export interface IChangeActiveTab {
  type: typeof CHANGE_ACTIVE_TAB,
  payload: string
}

export type IPanelTypes =
| IChangeActiveTab
