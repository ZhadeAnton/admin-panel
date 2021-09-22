import React from 'react'

import './styles.scss'
import Button from '../button/buttonPrimary/index'
import CarSettingForm from '../forms/carSettingForm'

export default function CarSetting() {
  return (
    <section className='car-setting'>
      <div className='car-setting__top'>
        <p className='car-setting__title'>
          Настройки автомобиля
        </p>

        <CarSettingForm />
      </div>

      <div className='car-setting__footer'>
        <div className='car-setting__footer--left-block'>
          <Button
            backgrond='blue'
            onClick={() => console.log('blue')}
            className='car-setting__footer--button'
          >
            Сохранить
          </Button>

          <Button
            backgrond='grey'
            onClick={() => console.log('grey')}
            className='car-setting__footer--button'
          >
            Отменить
          </Button>
        </div>

        <Button
          backgrond='red'
          onClick={() => console.log('red')}
          className='car-setting__footer--button'
        >
          Удалить
        </Button>
      </div>
    </section>
  )
}