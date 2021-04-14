import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {testAction} from '@/actions/app'

const Home = () => {
  const loading = useSelector((state) => state.app.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(testAction())
  }, [dispatch])

  return (
    <div>
      {loading ? 'true' : 'false'}
      <div>
        Home page <Link to="/login">Go to login</Link>
      </div>
    </div>
  )
}

export default Home
