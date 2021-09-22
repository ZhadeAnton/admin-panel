import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs

import './styles.scss'
import { panelList } from '../../../../utils/panelUtils'

interface ITabProps {
  icon: string,
  title: string
}

export default function PanelTabs() {
  const Tab = ({ icon: Icon, title }: ITabProps) => {
    return (
      <div className='panel-tabs__item'>
        <div className='panel-tabs__item--image'>
          <Icon />
        </div>

        <span>
          { title }
        </span>
      </div>
    )
  }

  const tabs = panelList.map((item, i) => {
    return (
      <TabPane
        key={i}
        tab={<Tab icon={item.icon} title={item.title} />}
      />
    )
  })

  return (
    <Tabs
      defaultActiveKey="2"
      tabPosition="right"
      className='panel-tabs'
    >
      { tabs }
    </Tabs>
  )
}
