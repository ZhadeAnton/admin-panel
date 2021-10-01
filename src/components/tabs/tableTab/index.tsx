import React, { useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import { getCars } from '../../../redux/cars/carsActionCreators'
import CarsList from '../../carsList'

export default function TableTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const cars = state.cars.cars

  useEffect(() => {
    dispatch(getCars())
  }, [])

  return (
    <section className='table-tab'>
      <CarsList cars={cars} />
    </section>
  )
}
