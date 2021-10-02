import React, { useState, useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import { getCars, setCarsCurrentPage } from '../../../redux/cars/carsActionCreators'
import { carTableSelects } from '../../../utils/carUtils'
import CarsList from '../../carsList'
import CustomPagination from '../../pagination'
import FilterRow from '../../filterRow'
import PanelTitle from '../../panel/panelTitle'

export default function TableTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [values, setValues] = useState({
    carCategory: 'Любые',
  })
  const cars = state.cars.cars
  const count = state.cars.count
  const currentPage = state.cars.currentPage

  useEffect(() => {
    handleOrderFilter()
  }, [currentPage])

  const handleOrderFilter = () => {
    dispatch(getCars(values.carCategory, currentPage))
  }

  const handleSelectChange = (value: string, field: string) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const handleChangeCarsPage = (currentPage: number) => {
    dispatch(setCarsCurrentPage(currentPage))
  }
  return (
    <section className='table-tab'>
      <PanelTitle title='Список машин' />

      <section className='table-tab__main'>
        <FilterRow
          selects={carTableSelects}
          onFilter={handleOrderFilter}
          onChangeSelect={handleSelectChange}
        />

        <CarsList cars={cars} />

        <CustomPagination
          defaultPageSize={7}
          pagesLength={count}
          currentPage={currentPage}
          onChange={handleChangeCarsPage}
        />
      </section>
    </section>
  )
}
