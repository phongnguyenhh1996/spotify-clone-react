import ButtonSubmit from '@/Components/Buttons/ButtonSubmit'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function FormLogin() {
  return (
    <div className="login-form">
      <form action="">
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="email">
            Email address or username
          </label>
          <input
            className="login-form__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email address or username"
          />
        </div>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="password">
            Enter your password
          </label>
          <input
            className="login-form__input"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <Link to="/" className="login-form__forgot">
          Forgot your password?
        </Link>
        <div className="login-form__submit">
          <div className="login-form__checkbox">
            <input className="login-form__checkbox-input" type="checkbox" />
            <span className="login-form__checkbox-label">Remember me</span>
          </div>
          <ButtonSubmit text="login" theme="green" />
        </div>
      </form>
    </div>
  )
}

export default FormLogin
