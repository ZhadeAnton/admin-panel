import { createSelector } from 'reselect'
import { IOrderStatus } from '../../interfaces/orderInterfaces'
import { RootState } from '../store'

const orderSelector = (state: RootState) => state.order

export const getOrderStatusCompleteSelector = createSelector(
    orderSelector,
    (orderState) => {
      if (orderState.orderStatuses) {
        return orderState.orderStatuses.filter((status) => (
          status.name === 'Подтвержденные'
        )) as unknown as IOrderStatus
      }
    }
)

export const getOrderStatusCancelSelector = createSelector(
    orderSelector,
    (orderState) => {
      if (orderState.orderStatuses) {
        return orderState.orderStatuses.filter((status) => (
          status.name === 'Отмененые'
        )) as unknown as IOrderStatus
      }
    }
)
