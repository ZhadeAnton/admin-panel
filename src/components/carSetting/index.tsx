import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks'
import { addNewCar, carSettingReset } from '../../redux/carSetting/carActionCreators'
import {
  carSettingFieldsSelector,
  newCarSelector } from '../../redux/carSetting/carSettingSelectors'
import Button from '../button/buttonPrimary/index'
import CarSettingForm from '../forms/carSettingForm'

export default function CarSetting() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken!
  const newCar = newCarSelector(state)
  const checkedFields = carSettingFieldsSelector(state)
  const progress = Math.trunc((checkedFields.length / 6) * 100)

  const handleResetForm = () => {
    dispatch(carSettingReset())
  }

  const handleAddNewcar = () => {
    dispatch(addNewCar({accessToken, newCar}))
  }

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
            disabled={progress !== 100}
            className='car-setting__footer--button'
            onClick={handleAddNewcar}
          >
            Сохранить
          </Button>

          <Button
            backgrond='grey'
            onClick={handleResetForm}
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
