import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RootReducer from '@/reducers'

export default createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
