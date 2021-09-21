import React from 'react'

import './styles.scss'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelTitle from '../../components/panel/panelTitle'
import PanelFooter from '../../components/panel/panelFooter'

export default function PanelPage() {
  return (
    <main className='panel-page'>
      <PanelAside />

      <section className='panel-page__main'>
        <PanelHeader />

        <PanelTitle title='Карточка атомобиля' />

        <PanelFooter />
      </section>
    </main>
  )
}
