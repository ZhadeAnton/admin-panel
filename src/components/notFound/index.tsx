import React from 'react'

import './styles.scss'
import Button from '../button/buttonPrimary/index'

export default function NotFound() {
  return (
    <section className='not-found'>
      <h1 className='not-found__code'>
        500
      </h1>

      <h2>
        Что то пошло не так
      </h2>

      <span>
        Попробуйте перезагрузить страницу
      </span>

      <div>
        <Button backgrond='blue' onClick={() => console.log('back')}>
          Назад
        </Button>
      </div>
    </section>
  )
}
