import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import NavBarFields from './NavBarFields'
import {fetchCart} from '../store/cartReducer'
import {_calcQuantity} from '../helperfuncs/calcQuantity'
import ls from 'local-storage'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  user: userReducer,
  // isLoggedIn: !!userReducer.id,
  cart: cartReducer.cart
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(logout()),
  getCart: id => dispatch(fetchCart(id))
})
export default withRouter(
  connect(mapStateToProps, mapDispatch)(
    class NavBar extends Component {
      render() {
        ls.remove('lsid')
        const {handleClick, isLoggedIn, cart, user} = this.props
        const currCart = isLoggedIn
          ? cart
          : Object.values(window.localStorage).map(item => JSON.parse(item))
        const finalQuantity = _calcQuantity(currCart)
        return (
          <NavBarFields
            handleClick={handleClick}
            email={isLoggedIn ? user.email : null}
            quantity={finalQuantity}
          />
        )
      }
    }
  )
)
