import React from 'react'

import { panelList } from '../../../utils/panelUtils'
import PanelAsideListItem from '../panelAsideListItem'

export default function PanelAsideList() {
  return (
    <ul className='panel-aside-list'>
      {
        panelList.map((item, i) => (
          <PanelAsideListItem
            key={i}
            icon={item.icon}
            title={item.title}
          />
        ))
      }
    </ul>
  )
}
