import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  backgrond: 'blue' | 'red' | 'grey',
  onClick: () => void
}

export default function Button(props: Props) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onClick!()
  }

  return (
    <button
      className={`button-primary${props.backgrond === 'blue'
    ? '-blue' : props.backgrond === 'red' ? '-red' : '-grey' }`}
      onClick={handleButtonClick}
    >
      { props.children }
    </button>
  )
}
