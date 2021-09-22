import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  backgrond: 'blue' | 'red' | 'grey'
}

export default function Button(props: Props) {
  return (
    <button className={`button-primary${props.backgrond === 'blue'
    ? '-blue' : props.backgrond === 'red' ? '-red' : '-grey' }`}>
      { props.children }
    </button>
  )
}
