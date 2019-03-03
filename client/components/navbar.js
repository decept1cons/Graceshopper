import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import LoggedInNavBar from './LoggedInNavBar'
import LoggedOutNavBar from './LoggedOutNavBar'
import {_calcQuantity} from '../helperfuncs/calcQuantity'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  user: userReducer,
  // isLoggedIn: !!userReducer.id,
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
      componentDidMount() {
        console.log('mount', this.props.cart, new Date())
        const quantity = _calcQuantity(this.props.cart)
        this.setState({quantity})
      }

      render() {
        const {handleClick, isLoggedIn, user} = this.props
        console.log('render', this.props.cart, new Date())
        return (
          <nav>
            {isLoggedIn ? (
              <LoggedInNavBar
                handleClick={handleClick}
                email={user.email}
                quantity={this.state.quantity}
              />
            ) : (
              <LoggedOutNavBar quantity={this.state.quantity} />
            )}
          </nav>
        )
      }
    }
  )
)
