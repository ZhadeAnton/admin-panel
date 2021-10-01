import carMock from '../assets/mocks/car-mock.png'

const baseURL = process.env.REACT_APP_DEFAULT_URL

export const getCarImageByPath = (path: string | undefined) => {
  if (path) return path.includes('base64') ? path : baseURL + path.slice(1)
}

export const carSettingCategories = [
  {
    value: 'Спорт',
    id: '5fd91add935d4e0be16a3c4b',
    description: 'Спорт быстро\n'
  },
  {
    value: 'Люкс',
    id: '60b943492aed9a0b9b7ed335',
    description: 'Автомобили премиум класса'
  },
  {
    value: 'Супер-эконом',
    id: '600598a3ad015e0bb699774c',
    description: 'Доступные автомобили',
  },
  {
    value: 'Эконом+',
    description: 'Комфортные машины среднего класса',
    id: '61027a262aed9a0b9b8500c2'
  }
]

export const getCarImage = (imagePath: string | undefined) => {
  return imagePath ? getCarImageByPath(imagePath) : carMock
}
