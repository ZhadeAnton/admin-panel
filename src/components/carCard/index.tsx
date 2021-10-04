import React from 'react'
import { Skeleton } from 'antd'

import './styles.scss'
import { useAppSelector } from '../../hooks/usePreTypedHooks'
import { carSettingFieldsSelector } from '../../redux/carSetting/carSettingSelectors'
import InputUpload from '../inputs/inputUpload'
import ProgressBar from '../progressBar'
import { getCarImage } from '../../utils/carUtils'

export default function CarCard() {
  const state = useAppSelector((state) => state)
  const { name, type, description, image } = state.carSetting
  const checkedFields = carSettingFieldsSelector(state)

  const handleGetProgress = () => {
    return Math.trunc((checkedFields.length / 6) * 100)
  }

  return (
    <section className='car-card'>
      <div className='car-card__top'>
        <div
          className='car-card__image-wrapper'>
          { image
            ? <img src={getCarImage(image.path)} alt="image" />
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

      <ProgressBar progress={handleGetProgress()} />

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
