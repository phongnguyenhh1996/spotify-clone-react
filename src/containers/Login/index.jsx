import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import logo from '@/images/logoSpotify-black.svg'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import ButtonLink from '@/Components/Buttons/ButtonLink'
import ButtonSubmit from '@/Components/Buttons/ButtonSubmit'

function Login() {
  return (
    <section className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__center">
        <div className="login__network">
          <h2 className="login__network-title">
            To continue, log in to Spotify.
          </h2>
          <ButtonLink
            text="Continue with Facebook"
            Icon={RiFacebookCircleFill}
            classbtn="btn-link--face"
          />
          <ButtonLink
            text="continue with apple"
            Icon={AiFillApple}
            classbtn="btn-link--apple"
          />
          <ButtonLink text="continue with google" Icon={FcGoogle} />
          <ButtonLink text="continue with phone number" Icon="" />
        </div>
        <div className="login__or">
          <div className="linethrough-or">
            <span className="linethrough-or__text" />
          </div>
        </div>
        <div className="login__form">
          <form action="">
            <div className="login__input">
              <label className="login__input-label" htmlFor="email">
                Email address or username
              </label>
              <input
                className="login__input-input"
                id="email"
                name="email"
                type="email"
                placeholder="Email address or username"
              />
            </div>
            <div className="login__input">
              <label className="login__input-label" htmlFor="password">
                Enter your password
              </label>
              <input
                className="login__input-input"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Link to="/" className="login__forgot">
              Forgot your password?
            </Link>
            <div className="login__submit">
              <div className="login__checkbox">
                <input className="login__checkbox-input" type="checkbox" />
                <span className="login__checkbox-span">Remember me</span>
              </div>
              <ButtonSubmit text="login" bgColor="btn-submit--green" />
            </div>
          </form>
        </div>
        <h3 className="login__title"> Don&apos;t have an account?</h3>
        <ButtonLink text="continue with phone number" Icon="" />
      </div>
    </section>
  )
}

export default Login
