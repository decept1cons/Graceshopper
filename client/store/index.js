import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

let store
const reducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  orderReducer
})

if (process.env.NODE_ENV === 'development') {
  const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )
  store = createStore(reducer, middleware)
} else {
  const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
  store = createStore(reducer, middleware)
}

export default store
export * from './userReducer'
