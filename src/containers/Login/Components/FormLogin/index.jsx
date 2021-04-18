import ButtonSubmit from '@/Components/Buttons/ButtonSubmit'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classnames from 'classnames'
import { get } from 'lodash'

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
})

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="email">
            Email address or username
          </label>
          <input
            {...register('email')}
            className={classnames('login-form__input', {
              'login-form__input--error': get(errors, 'email.message'),
            })}
            placeholder="Email address or username"
          />
          {errors.email && (
            <div className="login-form__input-error">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="password">
            Enter your password
          </label>
          <input
            {...register('password')}
            className={classnames('login-form__input', {
              'login-form__input--error': errors.email,
            })}
            placeholder="Enter your password"
            type="password"
          />
          {errors.password && (
            <div className="login-form__input-error">
              {errors.password.message}
            </div>
          )}
        </div>
        <Link to="/" className="login-form__forgot">
          Forgot your password?
        </Link>
        <div className="login-form__submit">
          <div className="login-form__checkbox">
            <input
              {...register('remember')}
              className="login-form__checkbox-input"
              type="checkbox"
              id="remember"
            />
            <label htmlFor="remember" className="login-form__checkbox-label">
              Remember me
            </label>
          </div>
          <ButtonSubmit text="login" theme="green" />
        </div>
      </form>
    </div>
  )
}

export default FormLogin
