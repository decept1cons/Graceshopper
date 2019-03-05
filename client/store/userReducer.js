import axios from 'axios'
import history from '../history'
import {fetchCart} from '../store/cartReducer'

/**
 * ACTION TYPES
 */

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const {data} = await axios.get('/auth/me')
    let user = getUser(data || defaultUser)
    console.log('thunk', user, new Date())
    let promise1 = await dispatch(user)
    console.log('promise1', user)
    console.log(user)
    let promise2 = await dispatch(fetchCart(promise1.user.id))
    console.log(promise2)
    await Promise.all([promise1, promise2])
  } catch (err) {
    console.error(err)
  }
}

export const getUserFromEmail = email => async dispatch => {
  const {data} = await axios.get(`/me/${email}`)
  return dispatch(getUser(data))
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
