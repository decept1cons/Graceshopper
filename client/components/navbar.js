import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import LoggedInNavBar from './LoggedInNavBar'
import LoggedOutNavBar from './LoggedOutNavBar'
import {fetchCart} from '../store/cartReducer'
import {_calcQuantity} from '../helperfuncs/calcQuantity'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  user: userReducer,
  // isLoggedIn: !!userReducer.id,
  cart: cartReducer.cart,
  quantity: cartReducer.quantity
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(logout()),
  getCart: id => dispatch(fetchCart(id))
})
export default withRouter(
  connect(mapStateToProps, mapDispatch)(
    class NavBar extends Component {
      state = {
        quantity: 0
      }
      componentDidUpdate(nextProps) {
        if (nextProps.user.id && !this.props.user.id) {
          nextProps.getCart(nextProps.user.id)
        }
      }

      render() {
        const {handleClick, isLoggedIn, quantity, cart, user} = this.props
        // const quantity = _calcQuantity(cart) ? _calcQuantity(cart) : 0
        console.log('quant', quantity)

        console.log('render', cart, new Date())
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
