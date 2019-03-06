import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link, Redirect} from 'react-router-dom'
import {fetchCart, submitOrder} from '../store/cartReducer'
import CartTable from './CartTable'
import {_calcTotal} from '../helperfuncs/calcTotal'

import {Table, Button, Icon} from 'semantic-ui-react'
const mapStateToProps = ({userReducer, cartReducer}) => ({
  userId: userReducer.id,
  cart: cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: id => dispatch(fetchCart(id)),
  submitOrder: id => dispatch(submitOrder(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class Checkout extends Component {
      state = {
        submit: false
      }
      componentDidMount() {
        const {getCart, userId} = this.props

        if (userId) getCart(userId)
      }

      submit = () => {
        const {submitOrder, userId} = this.props
        submitOrder(userId)
        this.setState({submit: true})
      }

      render() {
        return (
          <div>
            <h1>Shipping</h1>
            <h1>Payment</h1>
            <CartTable
              cart={this.props.cart}
              isLoggedIn={!!this.props.userId}
              disabled={false}
            />
            <Link to="/cart/checkout">
              <Button
                animated="vertical"
                id="singleButton"
                onClick={this.submit}
              >
                <Button.Content visible>
                  <Icon.Group size="large">
                    <Icon name="box" />
                    <Icon corner name="dollar sign" id="iconCheck" />
                  </Icon.Group>
                </Button.Content>
                <Button.Content hidden>Place Order</Button.Content>
              </Button>
            </Link>
            <h1>{_calcTotal(this.props.cart)}</h1>
            {this.state.submit ? <Redirect to="/home" /> : null}
          </div>
        )
      }
    }
  )
)
