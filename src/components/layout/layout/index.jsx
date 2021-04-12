import Header from '@/Components/Header/index'
import React from 'react'

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
