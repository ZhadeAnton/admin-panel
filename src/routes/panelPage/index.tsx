import React from 'react'

import './styles.scss'
import { panelList } from '../../utils/panelUtils'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelFooter from '../../components/panel/panelFooter'
import { useAppSelector } from '../../hooks/usePreTypedHooks'

export default function PanelPage() {
  const state = useAppSelector((state) => state)
  const activeTab = state.panel.activeTab
  const currentComponent = panelList[+activeTab]

  return (
    <main className='panel-page'>
      <PanelAside />

      <section className='panel-page__main'>
        <PanelHeader />

        <section className='panel-page__main--content'>
          {currentComponent.component()}
        </section>

        <PanelFooter />
      </section>
    </main>
  )
}
