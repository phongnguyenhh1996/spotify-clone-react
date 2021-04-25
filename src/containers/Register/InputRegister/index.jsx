import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function InputRegister(props) {
  const { label, placeholder } = props
  return (
    <div className="input-form-register">
      <label className="input-form-register__label" htmlFor="email">
        {label}
      </label>
      <input
        className="input-form-register__input"
        type="text"
        placeholder={placeholder}
        id="email"
      />
    </div>
  )
}

InputRegister.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

InputRegister.defaultProps = {
  label: '',
  placeholder: '',
}

export default InputRegister
