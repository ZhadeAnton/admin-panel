import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import {
  addCarColorCheckbox,
  carCategoryChange,
  carSettingChange
} from '../../../redux/carSetting/carActionCreators'
import { IRadioButton } from '../../../interfaces/inputInterfaces'
import { carSettingCategories } from '../../../utils/carUtils'
import InputPrimary from '../../inputs/inputPrimary'
import ButtonPlus from '../../button/buttonPlus'
import TextArea from '../../inputs/textArea'
import CheckboxGroup from '../checkboxGroup'
import RadioGroup from '../radioGroup'

export default function CarSettingForm() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const carSettings = state.carSetting

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const handleRadioButtonChange = (button: IRadioButton) => {
    dispatch(carCategoryChange(button))
  }

  const handleAddColorCheckbox = () => {
    if (carSettings.color != '') {
      dispatch(addCarColorCheckbox({
        checked: true,
        value: carSettings.color
      }))
    }
  }

  return (
    <form className='car-setting-form'>
      <div className='car-setting-form__double-inputs'>
        <div className='car-setting-form__double-inputs--wrapper'>
          <label className='car-setting-form__double-inputs--label'>
            Модель автомобиля
          </label>
          <InputPrimary
            type="text"
            name="name"
            value={carSettings.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='car-setting-form__double-inputs--wrapper'>
          <label className='car-setting-form__double-inputs--label'>
            Тип автомобиля
          </label>
          <InputPrimary
            type="text"
            name="type"
            value={carSettings.type}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='car-setting-form__categories'>
        <RadioGroup
          buttons={carSettingCategories}
          selected={carSettings.categoryId?.name}
          onChange={handleRadioButtonChange}
        />
      </div>

      <div className='car-setting-form__double-inputs'>
        <div className='car-setting-form__double-inputs--wrapper'>
          <label className='car-setting-form__double-inputs--label'>
            Минимальная цена
          </label>
          <InputPrimary
            type="text"
            name="priceMin"
            value={carSettings.priceMin}
            isOnlyNumber={true}
            error={{message: 'Только цифры!'}}
            onChange={handleInputChange}
          />
        </div>

        <div className='car-setting-form__double-inputs--wrapper'>
          <label className='car-setting-form__double-inputs--label'>
            Максимальная цена
          </label>
          <InputPrimary
            type="text"
            name="priceMax"
            value={carSettings.priceMax}
            isOnlyNumber={true}
            error={{message: 'Только цифры!'}}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='car-setting-form__car-colors'>
        <label className='car-setting-form__car-colors--label'>
          Доступные цвета
        </label>

        <div className='car-setting-form__car-colors--inputs-wrapper'>
          <InputPrimary
            type="text"
            name="color"
            value={carSettings.color}
            error={{
              condition: carSettings.colorCheckboxes.length >= 6,
              message: 'Не более 6 цветов'
            }}
            onChange={handleInputChange}
          />

          {
            carSettings.colorCheckboxes.length <= 5 &&
            <ButtonPlus onClick={handleAddColorCheckbox} />
          }
        </div>
      </div>

      <div className='car-setting-form__checkbox-group'>
        <CheckboxGroup checkboxes={carSettings.colorCheckboxes}/>
      </div>

      <div className='car-setting-form__text-area'>
        <TextArea
          name="description"
          value={carSettings.description}
          onChange={handleTextAreaChange}
        />
      </div>
    </form>
  )
}
