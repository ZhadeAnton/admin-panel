import React, { useState, useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import {
  carSettingReset,
  hideCarNotification } from '../../../redux/carSetting/carActionCreators'
import CarCard from '../../carCard'
import CarSetting from '../../carSetting'
import PanelTitle from '../../panel/panelTitle'
import Alert from '../../alert/index'

export default function CarSettingTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [alertVisible, setAlertVisible] = useState(false)
  const isNewCarSaved = state.carSetting.isNewCarSaved

  useEffect(() => {
    if (isNewCarSaved) {
      setAlertVisible(true)
      setTimeout(() => {
        dispatch(hideCarNotification())
        setAlertVisible(false)
      }, 3000)
    }

    return () => {
      dispatch(carSettingReset())
    }
  }, [isNewCarSaved])

  function handleCloseAlert() {
    setAlertVisible(false)
  }

  return (
    <section className='car-setting-tab'>
      <PanelTitle title='Карточка автомобиля' />

      <div className='car-setting-tab__content'>
        <CarCard />

        <CarSetting />
      </div>

      { alertVisible &&
          <Alert
            type='success'
            onClose={handleCloseAlert}
          >
            Успех! Машина сохранена
          </Alert>
      }
    </section>
  )
}
