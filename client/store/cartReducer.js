import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/**
 * INITIAL STATE
 */
const initialState = {
  cart: []
}

/**
 * ACTION CREATORS
 */
export const getCart = cart => ({type: GET_CART, cart})
export const addToCart = product => ({type: ADD_TO_CART, product})
export const removeFromCart = product => ({type: REMOVE_FROM_CART, product})

/**
 * THUNK CREATORS
 */

export const fetchCart = id => async dispatch => {
  const {data} = await axios.get(`/api/cart/${id}`)
  return dispatch(getCart(data))
}
export const addProductToCart = (product, id) => async dispatch => {
  const {data} = await axios.post(`/api/cart/${id}/${product.id}`, product)
  return dispatch(addToCart(data))
}

export const removeProductFromCart = (product, id) => async dispatch => {
  const {data} = await axios.delete(`/api/cart/${id}/${product.id}`)
  return dispatch(removeFromCart(data))
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
      return {
        ...state,
        cart: [...state.cart, action.product]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter(product => product.id !== action.product.id)
        ]
      }
    default:
      return state
  }
}
