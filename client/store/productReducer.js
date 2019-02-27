import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  product: {}
}

/**
 * ACTION CREATORS
 */
export const getProduct = product => ({type: GET_PRODUCT, product})
export const getProducts = products => ({type: GET_PRODUCTS, products})
export const removeProduct = product => ({type: REMOVE_PRODUCT, product})

/**
 * THUNK CREATORS
 */

export const fetchProducts = () => async dispatch => {
  const {data} = await axios.get('/api/products')
  return dispatch(getProducts(data))
}
export const fetchProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/products/${id}`)
  return dispatch(getProduct(data))
}

export const deleteProduct = product => async dispatch => {
  const {data} = await axios.delete(`/api/products/${product.id}`)
  return dispatch(removeProduct(data))
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: action.product
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(val => val.id !== action.product.id)
        ]
      }
    default:
      return state
  }
}
