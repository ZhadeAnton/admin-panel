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
