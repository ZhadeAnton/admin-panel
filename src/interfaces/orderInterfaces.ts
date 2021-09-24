
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
  isRightWheel: boolean
}
