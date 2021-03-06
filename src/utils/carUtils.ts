import carMock from '../assets/mocks/car-mock.png'

const baseURL = process.env.REACT_APP_DEFAULT_URL

export const getCarImageByPath = (path: string | undefined) => {
  if (path) return path.includes('base64') ? path : baseURL + path.slice(1)
}

export const carSettingCategories = [
  {
    name: 'Спорт',
    id: '5fd91add935d4e0be16a3c4b',
    description: 'Спорт быстро\n'
  },
  {
    name: 'Люкс',
    id: '60b943492aed9a0b9b7ed335',
    description: 'Автомобили премиум класса'
  },
  {
    name: 'Супер-эконом',
    id: '600598a3ad015e0bb699774c',
    description: 'Доступные автомобили',
  },
  {
    name: 'Эконом+',
    description: 'Комфортные машины среднего класса',
    id: '61027a262aed9a0b9b8500c2'
  }
]

const carsFilterByCategory = [
  { value: 'Любые', title: 'Любые', field: 'carCategory' },
  { value: '5fd91add935d4e0be16a3c4b', title: 'Спорт', field: 'carCategory' },
  { value: '60b943492aed9a0b9b7ed335', title: 'Люкс', field: 'carCategory' },
  { value: '600598a3ad015e0bb699774c', title: 'Супер-эконом', field: 'carCategory' },
  { value: '61027a262aed9a0b9b8500c2', title: 'Эконом+', field: 'carCategory' },
]

export const getCarColorsCheckboxes = (colors: Array<string>) => {
  return colors.map((color) => ({ value: color, checked: true }))
}

export const carTableSelects = [
  { defaultValue: 'Любые', options: carsFilterByCategory },
]

export const getCarImage = (imagePath: string | undefined) => {
  return imagePath ? getCarImageByPath(imagePath) : carMock
}

export const getCarTableFilter = (category: string | null) => {
  return category === 'Любые' ? '' : 'categoryId' + `=${category}` + '&'
}
