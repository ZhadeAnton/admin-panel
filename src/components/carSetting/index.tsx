import React from 'react'

import './styles.scss'
import Button from '../button/index'

export default function CarSetting() {
  return (
    <section className='car-setting'>
      <>
        <p className='car-setting__title'>
          Настройки автомобиля
        </p>
      </>

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
