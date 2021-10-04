import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  className?: string,
  disabled?: boolean,
  backgrond: 'blue' | 'red' | 'grey',
  onClick?: () => void
}

export default function Button(props: Props) {
  const buttonClassnames = `${props.className} button-primary${
    props.backgrond === 'blue'
    ? '-blue' : props.backgrond === 'red'
    ? '-red' : '-grey'}`

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onClick!()
  }

  return (
    <button
      className={buttonClassnames}
      disabled={props.disabled}
      onClick={handleButtonClick}
    >
      { props.children }
    </button>
  )
}
