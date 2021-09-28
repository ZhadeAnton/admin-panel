import React from 'react'
import { Skeleton } from 'antd'

import './styles.scss'
import { useAppSelector } from '../../hooks/usePreTypedHooks'
import InputUpload from '../inputs/inputUpload'
import ProgressBar from '../progressBar'

export default function CarCard() {
  const state = useAppSelector((state) => state)
  const { name, type, description, image } = state.carSetting

  return (
    <section className='car-card'>
      <div className='car-card__top'>
        <div
          className='car-card__image-wrapper'>
          {
            image
            ? <img src={image.path} alt="image" />
            : <Skeleton.Image />
          }
        </div>

        <div className='car-card__info'>
          <h3 className='car-card__info--model'>
            { name ? name : 'Модель' }
          </h3>

          <span className='car-card__info--type'>
            { type != '' ? type : 'Тип' }
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
          { description != '' ? description : 'Описание машины ...' }
        </p>
      </div>
    </section>
  )
}
