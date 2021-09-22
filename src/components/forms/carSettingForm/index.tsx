import React from 'react'

import './styles.scss'
import InputPrimary from '../../inputs/inputPrimary'
import ButtonPlus from '../../button/buttonPlus'
import RadioButton from '../../inputs/radioButton'

export default function CatSettingForm() {
  return (
    <form className='car-setting-form'>
      <div className='car-setting-form__top-inputs'>
        <div className='car-setting-form__top-inputs--wrapper'>
          <label className='car-setting-form__top-inputs--label'>
            Модель автомобиля
          </label>
          <InputPrimary type="text" />
        </div>

        <div className='car-setting-form__top-inputs--wrapper'>
          <label className='car-setting-form__top-inputs--label'>
            Тип автомобиля
          </label>
          <InputPrimary type="text" />
        </div>
      </div>

      <div className='car-setting-form__car-colors'>
        <label className='car-setting-form__car-colors--label'>
            Тип автомобиля
        </label>

        <div className='car-setting-form__car-colors--inputs-wrapper'>
          <InputPrimary type="text" />
          <ButtonPlus onClick={() => console.log('fire')} />
        </div>
      </div>

      <RadioButton />
    </form>
  )
}
