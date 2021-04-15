import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function LoginLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LoginLayout
