import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function WellComeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default WellComeLayout
