export interface ICarFromDB {
  categoryId?: {
    description: string,
    id: string,
    name: string
  },
  colors?: Array<string>
  createdAt?: number,
  description?: string,
  id?: string,
  name: string,
  number: string,
  priceMax?: number,
  priceMin?: 0,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  thumbnail: {
    mimetype: string,
    originalname: string,
    path: string,
    size: number
  }
}

export interface ICarImage {
  size: number,
  originalname: string,
  mimetype: string,
  path: string
}

export interface INewCar {
  priceMax: number,
  priceMin: number,
  name: string,
  thumbnail: {
    size: number,
    originalname: string,
    mimetype: string,
    path: string
  },
  description: string,
  categoryId: {
    name: string,
    description: string,
    id: string
  },
  colors: Array<string>
}

export interface ICar extends INewCar {
  id: string
}

export interface IPostNewCar {
  accessToken: string,
  newCar: INewCar
}
