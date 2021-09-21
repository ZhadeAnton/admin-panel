import React from 'react'

import './styles.scss'

interface Props {
  icon: string,
  title: string
}

export default function PanelAsideListItem(props: Props) {
  return (
    <li className='panel-list-item'>
      <div className='panel-list-item__image'>
        <props.icon />
      </div>

      <span>
        { props.title }
      </span>
    </li>
  )
}
