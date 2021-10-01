import React, { useEffect } from 'react'
import { Spin } from 'antd'

import './styles.scss'
import useHistoryPush from '../../hooks/useHistory'
import { useAppSelector } from '../../hooks/usePreTypedHooks'
import PanelHeader from '../../components/panel/panelHeader'
import PanelAside from '../../components/panel/PanelAside'
import PanelFooter from '../../components/panel/panelFooter'
import ErrorComponent from '../../components/errorComponent'

export default function PanelPage({ CurrentTab }: any) {
  const historyPush = useHistoryPush()
  const state = useAppSelector((state) => state)

  const isAdmin = state.auth.authData
  const isLoading = state.auth.isLoading
  const isServerError = state.panel.isServerError

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
            {
              !isServerError
              ? <CurrentTab />
              : (
                <ErrorComponent
                  status='500'
                  title='Что то пошло не так'
                  message='Попробуйте перезагрузить страницу'
                />
              )
            }
          </section>

          <PanelFooter />
        </section>
      </main>
    </Spin>
  )
}
