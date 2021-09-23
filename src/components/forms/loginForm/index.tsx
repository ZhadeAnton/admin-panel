import React, { useState } from 'react'

import './styles.scss'
import { useAppDispatch } from '../../../hooks/usePreTypedHooks'
import { logIn } from '../../../redux/auth/authActionCreators'
import Button from '../../button/buttonPrimary/index'
import InputPrimary from '../../inputs/inputPrimary'

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const [authData, setAuthData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setAuthData({...authData, [name]: value})
  }

  const handleLogIn = () => {
    dispatch(logIn(authData))
  }

  const { username, password } = authData

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
          value={username}
          name="username"
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
            onClick={handleLogIn}
          >
            Войти
          </Button>
        </div>
      </div>
    </form>
  )
}
