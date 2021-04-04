import React from 'react'
import './app.scss'
import PropTypes from 'prop-types'

const App = ({title}) => <div className="title">{title}</div>

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App
