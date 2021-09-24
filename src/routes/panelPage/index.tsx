import React, { useEffect } from 'react'
import { Spin } from 'antd'

import './styles.scss'
import useHistoryPush from '../../hooks/useHistory'
import { useAppSelector } from '../../hooks/usePreTypedHooks'
import { panelList } from '../../utils/panelUtils'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelFooter from '../../components/panel/panelFooter'

export default function PanelPage() {
  const historyPush = useHistoryPush()
  const state = useAppSelector((state) => state)
  const activeTab = state.panel.activeTab
  const currentComponent = panelList[+activeTab]
  const isAdmin = state.auth.authData
  const isLoading = state.auth.isLoading

  useEffect(() => {
    if (!isAdmin) historyPush('/login')
  }, [isAdmin])

  return (
    <Spin tip='Loading' spinning={isLoading}>
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
    </Spin>
  )
}
