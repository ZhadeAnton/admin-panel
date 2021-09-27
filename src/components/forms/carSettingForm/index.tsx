import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import { carSettingChange } from '../../../redux/carSetting/carActionCreators'
import InputPrimary from '../../inputs/inputPrimary'
import ButtonPlus from '../../button/buttonPlus'
import TextArea from '../../inputs/textArea'

export default function CarSettingForm() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    dispatch(carSettingChange(name, value))
  }

  const { name, type, description, priceMin, priceMax } = state.carSetting

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
            onChange={handleInputChange}
          />

          <ButtonPlus onClick={() => console.log('fire')} />
        </div>
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
