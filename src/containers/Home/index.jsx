import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <div>
      Home page <Link to="/login">Go to login</Link>
    </div>
  </div>
)

export default Home
