export interface ICar {
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
  colors: Array<string>,
  id: string
}

export interface ICarImage {
  uid: string,
  name: string,
  status: string,
  url: string
}
