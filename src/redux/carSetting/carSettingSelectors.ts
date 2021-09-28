import { createSelector } from 'reselect'
import { INewCar } from '../../interfaces/carInterfaces'
import { RootState } from '../store'

const carSettingSelector = (state: RootState) => state.carSetting

const carColorCheckboxed = createSelector(
    carSettingSelector,
    (carState) => carState.colorCheckboxes.map((checkbox) => checkbox.value)
)

export const newCarSelector = createSelector(
    carSettingSelector,
    carColorCheckboxed,
    (carState, carColors) => (
      {
        priceMax: carState.priceMax,
        priceMin: carState.priceMin,
        name: carState.name,
        thumbnail: {
          size: carState.image?.size,
          originalname: carState.image?.originalname,
          mimetype: carState.image?.mimetype,
          path: carState.image?.path
        },
        description: carState.description,
        categoryId: {
          name: carState.categoryId.value,
          description: carState.categoryId.description,
          id: carState.categoryId.id
        },
        colors: carColors
      }
    ) as unknown as INewCar
)
