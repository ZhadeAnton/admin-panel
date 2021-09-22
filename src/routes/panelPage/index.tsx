import React from 'react'

import './styles.scss'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelFooter from '../../components/panel/panelFooter'
import CarSettingTab from '../../components/tabs/carSettingTab'

export default function PanelPage() {
  return (
    <main className='panel-page'>
      <PanelAside />

      <section className='panel-page__main'>
        <PanelHeader />

        <section className='panel-page__main--content'>
          <CarSettingTab />
        </section>

        <PanelFooter />
      </section>
    </main>
  )
}
