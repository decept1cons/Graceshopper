import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link, Redirect} from 'react-router-dom'
import {fetchCart, submitOrder} from '../store/cartReducer'
import CartTable from './CartTable'
import {_calcTotal} from '../helperfuncs/calcTotal'
import {PaymentButton} from './paymentButton'
import AnimatedButton from './AnimatedButton'
import {Table, Button, Icon} from 'semantic-ui-react'
import ls from 'local-storage'
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
    class PaymentSuccess extends Component {
      state = {
        submit: false,
        payment: false
      }
      componentDidMount() {
        ls.remove('lsid')
        const {getCart, userId} = this.props

        if (userId) getCart(userId)
      }

      submit = () => {
        const {submitOrder, userId} = this.props
        if (userId) {
          console.log('here')
          submitOrder(userId)
        } else {
          ls.clear()
        }
        this.setState({submit: true})
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
              disabled={true}
            />
            <Button animated="vertical" id="singleButton" onClick={this.submit}>
              <Button.Content hidden>
                <Icon name="box" />
                <Icon corner name="dollar sign" id="iconCheck" />
              </Button.Content>
              <Button.Content visible>Place Order</Button.Content>
            </Button>
            {this.state.submit ? <Redirect to="/home" /> : null}
          </div>
        )
      }
    }
  )
)
