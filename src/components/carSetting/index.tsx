import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks'
import { addNewCar, carSettingReset } from '../../redux/carSetting/carActionCreators'
import {
  carSettingFieldsSelector,
  newCarSelector } from '../../redux/carSetting/carSettingSelectors'
import { deleteCarById, editCarById } from '../../redux/cars/carsActionCreators'
import Button from '../button/buttonPrimary/index'
import CarSettingForm from '../forms/carSettingForm'

export default function CarSetting() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken!
  const editedCar = newCarSelector(state)
  const checkedFields = carSettingFieldsSelector(state)
  const progress = Math.trunc((checkedFields.length / 6) * 100)

  const handleResetForm = () => {
    dispatch(carSettingReset())
  }

  const handleClickSave = () => {
    if (editedCar.id) {
      dispatch(editCarById(accessToken, editedCar))
    } else {
      dispatch(addNewCar({accessToken, newCar: editedCar}))
    }
  }

  const handleClickByDelete = () => {
    dispatch(deleteCarById(accessToken, editedCar.id))
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
            onClick={handleClickSave}
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

        {
          editedCar.id &&
          <Button
            backgrond='red'
            onClick={handleClickByDelete}
            className='car-setting__footer--button'
          >
            Удалить
          </Button>
        }
      </div>
    </section>
  )
}
