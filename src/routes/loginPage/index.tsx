import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.scss'
import { useAppSelector } from '../../hooks/usePreTypedHooks'
import Logo from '../../assets/SVG/logo.svg'
import LoginForm from '../../components/forms/loginForm'
import Alert from '../../components/alert'

export default function LoginPage() {
  const history = useHistory()
  const state = useAppSelector((state) => state)
  const [alertVisible, setAlertVisible] = useState(false)
  const authorizedUser = state.auth.authData
  const errorMessage = state.auth.errorMessage

  useEffect(() => {
    if (!authorizedUser) return

    if (authorizedUser) history.push(`/admin/${authorizedUser.userId}`)
  }, [authorizedUser])

  useEffect(() => {
    if (errorMessage) {
      setAlertVisible(true)
      const timer = setTimeout(() => setAlertVisible(false), 3500)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [errorMessage])

  function handleCloseAlert() {
    setAlertVisible(false)
  }

  return (
    <main className='login-page'>
      <section className='login-page__form-block'>
        <div className='login-page__header'>
          <img
            className='login-page__header--image'
            src={Logo}
            alt="Logo"
          />

          <h5 className='login-page__header--title'>
            Need for drive
          </h5>
        </div>

        <LoginForm />

        { alertVisible &&
          <Alert
            type='error'
            onClose={handleCloseAlert}
          >
            Логин или пароль введены неверно...
          </Alert>
        }
      </section>
    </main>
  )
}
