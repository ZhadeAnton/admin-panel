import React from 'react'

import './styles.scss'

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
        <input
          type="text"
          className='login-form__main--input'
        />

        <label className='login-form__main--label'>
            Пароль
        </label>
        <input
          type="text"
          className='login-form__main--input'
        />
      </section>

      <div>
        <a href="#">
            Запросить доступ
        </a>

        <button>
            Войти
        </button>
      </div>
    </form>
  )
}
