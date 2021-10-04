import React from 'react'
import { Progress } from 'antd'

import './styles.scss'

interface Props {
  progress: number
}

export default function ProgressBar(props: Props) {
  return (
    <div className='progress-bar'>
      <div className='progress-bar__header'>
        <span className='progress-bar__header--title'>
          Заполнено
        </span>

        <span className='progress-bar__header--count'>
          { props.progress }%
        </span>
      </div>

      <Progress
        percent={props.progress}
        showInfo={false}
      />
    </div>
  )
}
