import React from 'react'
import { useHistory } from 'react-router-dom';

import './styles.scss'
import Button from '../button/buttonPrimary/index'

interface Props {
  status: string,
  title: string,
  message: string
}

export default function ErrorComponent(props: Props) {
  const history = useHistory();

  return (
    <section className='error-component'>
      <h1 className='error-component__code'>
        { props.status }
      </h1>

      <h2 className='error-component__title'>
        { props.title }
      </h2>

      <span className='error-component__info'>
        { props.message }
      </span>

      <div className='error-component__button'>
        <Button backgrond='blue' onClick={() => history.goBack()}>
          Назад
        </Button>
      </div>
    </section>
  )
}
