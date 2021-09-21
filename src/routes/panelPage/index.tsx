import React from 'react'

import './styles.scss'
import PanelAside from '../../components/panel/panelAside'
import PanelHeader from '../../components/panel/panelHeader'

export default function PanelPage() {
  return (
    <main className='panel-page'>
      <PanelAside />

      <section className='panel-page__main'>
        <PanelHeader />
      </section>
    </main>
  )
}
