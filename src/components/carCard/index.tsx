import React from 'react'

import './styles.scss'
import InputUpload from '../inputs/inputUpload'
import ProgressBar from '../progressBar'

interface Props {
  image: string,
  model: string,
  type: string
}

export default function CarCard(props: Props) {
  return (
    <section className='car-card'>
      <div className='car-card__top'>
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

        <div className='car-card__upload'>
          <InputUpload />
        </div>
      </div>

      <ProgressBar progress={74} />

      <div className='car-card__description'>
        <h6 className='car-card__description--title'>
          Описание
        </h6>

        <p className='car-card__description--text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum
          assumenda eligendi cumque?
        </p>
      </div>
    </section>
  )
}
