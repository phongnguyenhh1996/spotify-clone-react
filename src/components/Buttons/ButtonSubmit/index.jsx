import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function ButtonSubmit(props) {
  const { text, bgColor } = props
  return (
    <button type="submit" className={`btn-submit ${bgColor}`}>
      {text}
    </button>
  )
}
ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}
export default ButtonSubmit
