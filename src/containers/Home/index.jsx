import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@/store/slices/app'

const Home = () => {
  const value = useSelector((state) => state.app.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(increment())
  }, [dispatch])

  return (
    <div>
      {value}
      <div>
        Home page <Link to="/login">Go to login</Link>
      </div>
    </div>
  )
}

export default Home
