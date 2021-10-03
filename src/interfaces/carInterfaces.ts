export interface ICar {
  priceMax: number,
  priceMin: number,
  name: string,
  number?: number,
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
  } | null,
  colors: Array<string>,
  id?: string
}

export interface IPostNewCar {
  accessToken: string,
  newCar: ICar
}

export interface IDeleteCar {
  accessToken: string,
  carId: ICar['id']
}
