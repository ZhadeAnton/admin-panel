import React, { useState } from 'react'

import './styles.scss'
import InputPrimary from '../../inputs/inputPrimary'
import ButtonPlus from '../../button/buttonPlus'
import TextArea from '../../inputs/textArea'

export default function CarSettingForm() {
  const [carSettingData, setCarSettingData] = useState({
    name: '',
    type: '',
    description: '',
    priceMin: '',
    priceMax: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setCarSettingData({...carSettingData, [name]: value})
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target
    setCarSettingData({...carSettingData, description: target.value})
  }

  const { name, type, description, priceMin, priceMax } = carSettingData

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
