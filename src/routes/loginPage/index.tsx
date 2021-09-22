import React from 'react'

import './styles.scss'
import Logo from '../../assets/SVG/logo.svg'
import LoginForm from '../../components/forms/loginForm'

export default function LoginPage() {
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
      </section>
    </main>
  )
}
