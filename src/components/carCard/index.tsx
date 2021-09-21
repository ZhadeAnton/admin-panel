import React from 'react'

import './styles.scss'

interface Props {
  image: string,
  model: string,
  type: string
}

export default function CarCard(props: Props) {
  return (
    <section className='car-card'>
      <div className='car-card__image-wrapper'>
        <img src={props.image} alt="" />
      </div>

      <div className='car-card__info'>
        <h3 className='car-card__info--model'>
          { props.model }
        </h3>

        <span className='car-card__info--type'>
          { props.type }
        </span>
      </div>
    </section>
  )
}
