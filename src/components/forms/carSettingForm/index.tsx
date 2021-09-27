import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import {
  addCarColorCheckbox,
  carSettingChange
} from '../../../redux/carSetting/carActionCreators'
import InputPrimary from '../../inputs/inputPrimary'
import ButtonPlus from '../../button/buttonPlus'
import TextArea from '../../inputs/textArea'
import CheckboxGroup from '../checkboxGroup'

export default function CarSettingForm() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  // eslint-disable-next-line max-len
  const { name, type, description, priceMin, priceMax, color, colorCheckboxes } = state.carSetting

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const handleAddColorCheckbox = () => {
    if (color != '') {
      dispatch(addCarColorCheckbox({
        checked: true,
        value: color
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
            value={name}
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
            value={type}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='car-setting-form__double-inputs'>
        <div className='car-setting-form__double-inputs--wrapper'>
          <label className='car-setting-form__double-inputs--label'>
            Минимальная цена
          </label>
          <InputPrimary
            type="text"
            name="priceMin"
            value={priceMin}
            isOnlyNumber={true}
            error={{
              message: 'Только цифры!'
            }}
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
            value={priceMax}
            isOnlyNumber={true}
            error={{
              message: 'Только цифры!'
            }}
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
            value={color}
            error={{
              condition: colorCheckboxes.length >= 6,
              message: 'Не более 6 цветов'
            }}
            onChange={handleInputChange}
          />

          {
            colorCheckboxes.length <= 5 &&
            <ButtonPlus onClick={handleAddColorCheckbox} />
          }
        </div>
      </div>

      <div className='car-setting-form__checkbox-group'>
        <CheckboxGroup checkboxes={colorCheckboxes}/>
      </div>

      <div className='car-setting-form__text-area'>
        <TextArea
          name="description"
          value={description}
          onChange={handleTextAreaChange}
        />
      </div>
    </form>
  )
}
