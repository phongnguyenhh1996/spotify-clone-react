import React from 'react'
import { Link } from 'react-router-dom'
import InputRegister from '../InputRegister'
import './style.scss'

function FormRegister() {
  return (
    <div className="form-resgister">
      <form action="">
        <InputRegister
          label="What's your email?"
          placeholder="Enter your email."
        />
        <InputRegister
          label="Confirm your email"
          placeholder="Enter your email again."
        />
        <InputRegister
          label="Create a password"
          placeholder="Create a password."
        />
        <InputRegister
          label="What should we call you?"
          placeholder="Enter a profile name."
        />
        <h3 className="form-resgister-h3"> What&apos;s your date of birth?</h3>
        <div className="form-resgister__time">
          <div className="form-resgister__date">
            <label className="form-resgister__time-label" htmlFor="dd">
              Day
            </label>
            <input
              className="form-resgister__time-input"
              type="number"
              placeholder="DD"
              id="dd"
            />
          </div>
          <div className="form-resgister__month">
            <label className="form-resgister__time-label" htmlFor="mm">
              Month
            </label>
            <select
              className="form-resgister__time-select"
              name="month"
              id="mm"
              placeholder="MONTH"
            >
              <option value="january">january</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="Devember">Devember</option>
            </select>
          </div>
          <div className="form-resgister__year">
            <label className="form-resgister__time-label" htmlFor="yy">
              Year
            </label>
            <input
              className="form-resgister__time-input"
              type="number"
              placeholder="YYYY"
              id="yy"
            />
          </div>
        </div>
        <h3 className="form-resgister-h3">What&apos;s your gender?</h3>
        <div className="form-resgister__radio">
          <div className="form-resgister__radio-item">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-resgister__radio-item">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Female</label>
          </div>
          <div className="form-resgister__radio-item">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Non-binary</label>
          </div>
        </div>
        <div className="form-resgister__check">
          <input type="checkbox" />
          <span>
            I would prefer not to receive marketing messages from Spotify
          </span>
        </div>
        <div className="form-resgister__check">
          <input type="checkbox" />
          <span>
            Share my registration data with Spotify&apos;s content providers for
            marketing purposes.
          </span>
        </div>
        <div className="text-center">
          <div className="form-resgister__text">
            <p>
              <span className="form-resgister__desciption-span">
                By clicking on Sign up, you agree to Spotify&apos;s
                <Link className="form-resgister__desciption-link" to="/">
                  Terms and Conditions of Use.
                </Link>
              </span>
              <br />
              <br />
              <span className="form-resgister__desciption-span">
                To learn more about how Spotify collects, uses, shares and
                protects your personal data please read Spotify&apos;s
                <Link className="form-resgister__desciption-link" to="/">
                  Privacy Policy.
                </Link>
              </span>
            </p>
          </div>
          <button type="submit" className="form-resgister__btn">
            sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister
