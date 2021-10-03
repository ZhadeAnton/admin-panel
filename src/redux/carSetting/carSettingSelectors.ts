import { createSelector } from 'reselect'
import { ICar } from '../../interfaces/carInterfaces'
import { RootState } from '../store'

const carSettingSelector = (state: RootState) => state.carSetting

export const carSettingFieldsSelector = createSelector(
    carSettingSelector,
    (carState) => {
      return [
        carState.name,
        carState.type,
        carState.description,
        carState.image,
        carState.priceMax,
        carState.priceMin
      ].filter((item) => item)
    }
)

const carColorCheckboxes = createSelector(
    carSettingSelector,
    (carState) => carState.colorCheckboxes.map((checkbox) => checkbox.value)
)

export const newCarSelector = createSelector(
    carSettingSelector,
    carColorCheckboxes,
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
          name: carState.categoryId.name,
          description: carState.categoryId.description,
          id: carState.categoryId.id
        },
        colors: carColors
      }
    ) as unknown as ICar
)
