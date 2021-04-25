import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function InputRegister(props) {
  const { label, placeholder, id } = props
  return (
    <div className="input-form-register">
      <label className="input-form-register__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-form-register__input"
        type="text"
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}

InputRegister.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
}

InputRegister.defaultProps = {
  label: '',
  placeholder: '',
  id: '',
}

export default InputRegister
