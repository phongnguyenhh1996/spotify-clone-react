import React from 'react'

import {Provider} from 'react-redux'
import 'normalize.css'
import './app.scss'
import AppRouter from '@/routes'
import store from '../store'

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
