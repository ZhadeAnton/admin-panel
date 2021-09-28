export interface ICarImage {
  uid: string,
  name: string,
  status: string,
  url: string
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
