import React from 'react'

import './styles.scss'
import Button from '../../button/index'
import InputPrimary from '../../inputs/inputPrimary'

export default function LoginForm() {
  return (
    <form className='login-form'>
      <div className='login-form__header'>
        <h5 className='login-form__header--title'>
          Вход
        </h5>
      </div>

      <section className='login-form__main'>
        <label className='login-form__main--label'>
          Почта
        </label>
        <InputPrimary type="text" />

        <label className='login-form__main--label'>
          Пароль
        </label>
        <InputPrimary type="password" />
      </section>

      <div className='login-form__footer'>
        <a
          className='login-form__footer--link'
          href="#"
        >
          Запросить доступ
        </a>

        <div className='login-form__footer--button'>
          <Button backgrond='blue'>
            Войти
          </Button>
        </div>
      </div>
    </form>
  )
}
