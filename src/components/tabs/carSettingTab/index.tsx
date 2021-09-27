import React from 'react'

import './styles.scss'
import CarCard from '../../carCard'
import CarSetting from '../../carSetting'
import PanelTitle from '../../panel/panelTitle'

export default function CarSettingTab() {
  return (
    <section className='car-setting-tab'>
      <PanelTitle title='Карточка атомобиля' />

      <div className='car-setting-tab__content'>
        <CarCard />

        <CarSetting />
      </div>
    </section>
  )
}
