import { ISetOrderComplete } from '../interfaces/orderInterfaces'

const orderFilterByDate = [
  { value: 'За сегодня', title: 'За сегодня', field: 'createdAt' },
  { value: 'За неделю', title: 'За неделю', field: 'createdAt' },
  { value: 'За месяц', title: 'За месяц', field: 'createdAt' },
  { value: 'За год', title: 'За год', field: 'createdAt' },
]

const orderFilterByCar = [
  { value: '600f4a97ad015e0bb6997d37', title: 'Nissan, X-Trail', field: 'carId' },
  { value: '600f4935ad015e0bb6997d30', title: 'Nissan, Qashqai', field: 'carId' },
  { value: '60a4fe4e2aed9a0b9b7ec10a', title: 'Volvo S90', field: 'carId' },
  { value: '611d60152aed9a0b9b850bdf', title: 'Lada Vesta', field: 'carId' },
  { value: '61228bab2aed9a0b9b850eab', title: 'Renault Sandero', field: 'carId' },
  { value: 'Любая', title: 'Любая', field: 'carId' }
]

const orderFilterByCity = [
  { value: '5ea07ad3099b810b946c6254', title: 'Ульяновск', field: 'cityId' },
  { value: '5ea07c10099b810b946c627a', title: 'Казань', field: 'cityId' },
  { value: '6005b8f9ad015e0bb6997778', title: 'Санкт-Петербург', field: 'cityId' },
  { value: '6011452fad015e0bb6997e1d', title: 'Уфа', field: 'cityId' },
  { value: '60bc9a4c2aed9a0b9b82fcb3', title: 'Москва', field: 'cityId' },
  { value: '60d6e4d32aed9a0b9b84fa82', title: 'Краснодар', field: 'cityId' },
  { value: '612ba69d9036850bb6e3e7b9', title: 'Омск', field: 'cityId' },
  { value: '614e46c818f5c2264119aeeb', title: 'Самара', field: 'cityId' }
]

const orderFilterByStatus = [
  { value: '5e26a191099b810b946c5d89', title: 'Новые', field: 'statusId' },
  { value: '5e26a1f0099b810b946c5d8b', title: 'Подтвержденные', field: 'statusId' },
  { value: '5e26a1f5099b810b946c5d8c', title: 'Отмененые', field: 'statusId' },
  { value: '6114e4502aed9a0b9b850846', title: 'Временные', field: 'statusId' }
]

export const carOrderSelects = [
  { defaultValue: 'За месяц', options: orderFilterByDate },
  { defaultValue: 'Любая', options: orderFilterByCar },
  { defaultValue: 'Ульяновск', options: orderFilterByCity },
  { defaultValue: 'Новые', options: orderFilterByStatus },
]

export const getCarIdFilter = (carId: string | null) => {
  return carId !== 'Любая' ? 'carId' + `=${carId}` + '&' : ''
}

export const getDateFilter = (date: string) => {
  const dateNow = Date.now()
  const oneDayInMills = 86400000
  const dayAgo = dateNow - (oneDayInMills * 1)
  const weekAgo = dateNow - (oneDayInMills * 7)
  const monthAgo = dateNow - (oneDayInMills * 30)
  const yearAgo = dateNow - (oneDayInMills * 365)

  switch (date) {
    case 'За сегодня':
      return `createdAt[$gt]=${dayAgo}&`

    case 'За неделю':
      return `createdAt[$gt]=${weekAgo}&`

    case 'За месяц':
      return `createdAt[$gt]=${monthAgo}&`

    case 'За год':
      return `createdAt[$gt]=${yearAgo}&`
  }
}

export const getOrderFilters = (
    {createdAt, carId, cityId, statusId, currentPage}: any) => {
  const carFilter = getCarIdFilter(carId)
  const dateFilter = getDateFilter(createdAt)

  // eslint-disable-next-line max-len
  return `db/order?${dateFilter}${carFilter}cityId=${cityId}&orderStatusId=${statusId}&limit=${4}&page=${currentPage}`
}

export const getOrderStatusComplete = (order: ISetOrderComplete) => {
  return {...order.order,
    orderStatusId: {
      id: order.newOrderId![0].id,
      name: order.newOrderId![0].name
    }}
}
