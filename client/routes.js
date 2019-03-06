import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import ProductGrid from './components/ProductGrid'
import UserAccount from './components/user-account'
import PreviousOrders from './components/PreviousOrders'
import Checkout from './components/Checkout'
import CompletedOrderDisplay from './components/CompletedOrderDisplay'

/**
 * COMPONENT
 */

// const mapState = ({userReducer}) => ({isLoggedIn: !!userReducer.id})

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }
export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }
  render() {
    const {isLoggedIn} = this.props

    return isLoggedIn ? (
      <Switch>
        {/* Routes placed here are only available after logging in */}
        s
        <Route exact path="/cart" component={Cart} />
        <Route path="/account" component={UserAccount} />
        <Route path="/cart/checkout" component={Checkout} />
        <Route path="/orders" component={PreviousOrders} />
        <Route path="/home" component={UserHome} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/paysuccess" component={CompletedOrderDisplay} />
      </Switch>
    ) : (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={ProductGrid} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/cart/checkout" component={Checkout} />
      </Switch>
    )
  }
}
