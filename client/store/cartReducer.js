import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const HANDLE_ORDER = 'HANDLE_ORDER'
/**
 * INITIAL STATE
 */
const initialState = {
  cart: [],
  mostRecentOrder: {}
}

/**
 * ACTION CREATORS
 */
export const getCart = cart => ({type: GET_CART, cart})
export const addToCart = ({eagerLoadedOrder, create}) => ({
  type: ADD_TO_CART,
  eagerLoadedOrder,
  create
})
export const removeFromCart = id => ({type: REMOVE_FROM_CART, id})
export const handleOrder = newOrder => ({type: HANDLE_ORDER, newOrder})
/**
 * THUNK CREATORS
 */

export const fetchCart = id => async dispatch => {
  console.log('fetch', id)
  const {data} = await axios.get(`/api/cart/${id}`)
  return dispatch(getCart(data))
}
export const addProductToCart = (
  productId,
  userId,
  price
) => async dispatch => {
  const {data} = await axios.post(`/api/cart/${userId}`, {
    productId,
    userId,
    price
  })

  return dispatch(addToCart(data))
}

export const removeProductFromCart = (orderId, userId) => async dispatch => {
  await axios.delete(`/api/cart/${userId}/item/${orderId}`)
  return dispatch(removeFromCart(orderId))
}

export const submitOrder = userId => async dispatch => {
  const {data} = await axios.put(`/api/cart/${userId}`)
  return dispatch(handleOrder(data))
}
/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.cart
      }
    case ADD_TO_CART:
      if (action.create) {
        return {
          ...state,
          cart: [...state.cart, action.eagerLoadedOrder]
        }
      } else {
        return {
          ...state,
          cart: state.cart.map(order => {
            if (order.id === action.eagerLoadedOrder.id) {
              order = action.eagerLoadedOrder
            }
            return order
          })
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== action.id)]
      }
    case HANDLE_ORDER:
      return {
        ...state,
        mostRecentOrder: action.newOrder,
        cart: []
      }
    default:
      return state
  }
}
