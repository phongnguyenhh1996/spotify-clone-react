import Header from '@/components/Header'
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
