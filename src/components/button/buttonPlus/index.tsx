import React from 'react'

import './styles.scss'

interface Props {
  onClick: () => void
}

export default function ButtonPlus(props: Props) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onClick!()
  }

  return (
    <button
      className='button-plus'
      onClick={handleButtonClick}
    />
  )
}
