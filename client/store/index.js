import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
const reducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  orderReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './userReducer'
