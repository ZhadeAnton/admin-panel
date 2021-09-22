import React, { useState } from 'react'

import './styles.scss'
import useHistoryPush from '../../../hooks/useHistory'
import Button from '../../button/buttonPrimary/index'
import InputPrimary from '../../inputs/inputPrimary'

export default function LoginForm() {
  const historyPush = useHistoryPush()
  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setAuthData({...authData, [name]: value})
  }

  const { email, password } = authData

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
        <InputPrimary
          type="text"
          value={email}
          name="email"
          onChange={handleInputChange}
        />

        <label className='login-form__main--label'>
          Пароль
        </label>
        <InputPrimary
          type="password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
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
