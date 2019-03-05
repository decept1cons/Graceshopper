import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const initialState = {
  orders: []
}

/**
 * ACTION CREATORS
 */

const getOrders = orders => ({type: GET_ORDERS, orders})

/**
 * THUNK CREATORS
 */

export const fetchOrders = id => async dispatch => {
  const {data} = await axios.get(`/api/orders/${id}`)
  return dispatch(getOrders(data))
}

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    default:
      return state
  }
}
