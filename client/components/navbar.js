import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import LoggedInNavBar from './LoggedInNavBar'
import LoggedOutNavBar from './LoggedOutNavBar'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  user: userReducer,
  isLoggedIn: !!userReducer.id,
  cart: cartReducer.cart
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(logout())
})
export default withRouter(
  connect(mapStateToProps, mapDispatch)(
    class NavBar extends Component {
      state = {
        quantity: 0
      }

      calcQuantity = cart => {
        return cart.reduce((totalQuantity, cartItem) => {
          return totalQuantity + cartItem.quantity
        }, 0)
      }

      render() {
        const quantity = this.calcQuantity(this.props.cart)

        const {handleClick, isLoggedIn, user} = this.props
        return (
          <nav>
            {isLoggedIn ? (
              <LoggedInNavBar
                handleClick={handleClick}
                email={user.email}
                quantity={quantity}
              />
            ) : (
              <LoggedOutNavBar quantity={quantity} />
            )}
          </nav>
        )
      }
    }
  )
)
