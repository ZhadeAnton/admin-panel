import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs

import './styles.scss'
import { panelList } from '../../../../utils/panelUtils'
import { useAppDispatch, useAppSelector } from '../../../../hooks/usePreTypedHooks'
import { changeActiveTab } from '../../../../redux/panel/panelActionCreators'

interface ITabProps {
  icon: string,
  title: string
}

export default function PanelTabs() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const activeTab = state.panel.activeTab

  const handleChangeTab = (tab: string) => {
    dispatch(changeActiveTab(tab))
  }

  const Tab = ({ icon: Icon, title }: ITabProps) => {
    return (
      <div className='panel-tabs__item'>
        <div className='panel-tabs__item--image'>
          <Icon />
        </div>

        <span className='panel-tabs__item--title'>
          { title }
        </span>
      </div>
    )
  }

  const tabPanes = panelList.map((item, i) => {
    return (
      <TabPane
        key={i}
        tab={<Tab icon={item.icon} title={item.title} />}
      />
    )
  })

  return (
    <Tabs
      defaultActiveKey={activeTab}
      activeKey={activeTab}
      tabPosition="right"
      className='panel-tabs'
      onChange={handleChangeTab}
    >
      { tabPanes }
    </Tabs>
  )
}
