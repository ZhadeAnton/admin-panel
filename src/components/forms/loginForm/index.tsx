import React from 'react'

import './styles.scss'
import useHistoryPush from '../../../hooks/useHistory'
import Button from '../../button/buttonPrimary/index'
import InputPrimary from '../../inputs/inputPrimary'

export default function LoginForm() {
  const historyPush = useHistoryPush()

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
          <Button
            backgrond='blue'
            onClick={() => historyPush('/panel')}
          >
            Войти
          </Button>
        </div>
      </div>
    </form>
  )
}
