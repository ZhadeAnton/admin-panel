export interface IOrder {
  orderStatusId: {
    name: string,
    id: string
  },
  cityId: {
    name: string,
    id: string
  },
  pointId: {
    address: string,
    name: string,
    id: string
  },
  carId: {
    name: string,
    number: string,
    thumbnail?: {
      mimetype: string,
      originalname: string,
      path: string,
      size: number
    }
  },
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: {
    name: string
  },
  price: number | undefined,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  id: string
}

export interface IOrderStatus {
  id: string,
  name: string
}

export interface IFnSetOrderComplete {
  (accessToken: string, order: IOrder, newOrderId: IOrderStatus | undefined): any
}

export interface IOrderByFilter {
  carId: string | null,
  cityId: string | null,
  statusId: string | null,
  accessToken: string
}
