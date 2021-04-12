import Header from '@/components/header'
import React from 'react'
import PropTypes from 'prop-types'

function Layout(props) {
  const {children} = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
