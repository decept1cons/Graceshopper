import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link, Redirect} from 'react-router-dom'
import {fetchCart, submitOrder} from '../store/cartReducer'
import CartTable from './CartTable'
import {_calcTotal} from '../helperfuncs/calcTotal'
import {PaymentButton} from './paymentButton'
import AnimatedButton from './AnimatedButton'
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
        submit: false,
        payment: false
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
      paymentSuccess = () => {
        this.setState({payment: true})
      }
      render() {
        const finalCart = this.props.userId
          ? this.props.cart
          : Object.values(window.localStorage).map(item => JSON.parse(item))
        return (
          <div className="cart">
            <CartTable
              cart={finalCart}
              isLoggedIn={!!this.props.userId}
              disabled={false}
            />
            <div>
              <PaymentButton
                amount={_calcTotal(this.props.cart)}
                payment={this.paymentSuccess}
              />
            </div>
            {this.state.submit ? <Redirect to="/home" /> : null}
          </div>
        )
      }
    }
  )
)
