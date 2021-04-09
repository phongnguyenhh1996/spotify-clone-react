import Header from '@/components/header'
import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <Header />
    <div style={{marginTop: '200px'}}>
      Home page <Link to="/login">Go to login</Link>
    </div>
  </div>
)

export default Home
