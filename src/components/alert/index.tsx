import React from 'react'

import './styles.scss'
import { ReactComponent as Ready } from '../../assets/SVG/ready.svg'
import { ReactComponent as Error } from '../../assets/SVG/error.svg'
import { ReactComponent as Close } from '../../assets/SVG/cancel.svg'

interface Props {
  children: string,
  type: 'success' | 'error',
  onClose: () => void
}

export default function Alert(props: Props) {
  return (
    <div className={`alert${props.type === 'success' ? '-success' : '-error'}`}>
      <div className='alert__info'>
        {
          props.type === 'success'
          ? <Ready />
          : <Error />
        }

        <p className='alert__info--title'>
          { props.children }
        </p>
      </div>

      <div
        className='alert__close'
        onClick={props.onClose}
      >
        <Close />
      </div>
    </div>
  )
}
