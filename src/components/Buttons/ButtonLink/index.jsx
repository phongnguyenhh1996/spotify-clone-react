import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

function ButtonLink(props) {
  const { text, Icon, classbtn } = props

  return (
    <Link to="/" className={`btn-link ${classbtn}`}>
      {Icon && <Icon className="btn-link__icon" />}
      {text}
    </Link>
  )
}
ButtonLink.defaultProps = {
  text: '',
  classbtn: '',
  Icon: '',
}

ButtonLink.propTypes = {
  text: PropTypes.string,
  classbtn: PropTypes.string,
  Icon: PropTypes.node,
}

export default ButtonLink
