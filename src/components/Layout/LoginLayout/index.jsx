import Header from '@/Components/Header/index'
import React from 'react'

function LoginLayout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LoginLayout
