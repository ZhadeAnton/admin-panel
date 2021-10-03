import React from 'react'

import './styles.scss'
import { ReactComponent as Icon } from '../../assets/SVG/notification.svg'

interface Props {
  count: number
}

export default function Notification(props: Props) {
  return (
    <div className='notification'>
      <div className='notification__image'>
        <Icon />
      </div>

      <div className='notification__count'>
        <span className='notification__count--number'>
          { props.count }
        </span>
      </div>
    </div>
  )
}
