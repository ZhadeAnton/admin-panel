import React from 'react'

import './styles.scss'
import carMock from '../../assets/mocks/car-mock.png'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelTitle from '../../components/panel/panelTitle'
import PanelFooter from '../../components/panel/panelFooter'
import CarCard from '../../components/carCard'
import CarSetting from '../../components/carSetting'

export default function PanelPage() {
  return (
    <main className='panel-page'>
      <PanelAside />

      <section className='panel-page__main'>
        <PanelHeader />

        <section className='panel-page__content'>
          <PanelTitle title='Карточка атомобиля' />

          <section className='panel-page__content--main'>
            <CarCard
              image={carMock}
              model='Hyndai, i30 N'
              type='Комплект-кар'
            />

            <CarSetting />
          </section>
        </section>

        <PanelFooter />
      </section>
    </main>
  )
}
