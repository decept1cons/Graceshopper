import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchCart} from '../store/cartReducer'
import CartTable from './CartTable'
import {Button, Icon} from 'semantic-ui-react'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  userId: userReducer.id,
  cart: cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class Cart extends Component {
      componentDidMount() {
        const {getCart, userId} = this.props
        if (userId) getCart(userId)
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
            {finalCart.length ? (
              <Link to="/cart/checkout">
                <Button animated="vertical" id="singleButton">
                  <Button.Content visible>
                    <Icon.Group size="large">
                      <Icon name="shop" />
                      <Icon corner name="check circle" id="iconCheck" />
                    </Icon.Group>
                  </Button.Content>
                  <Button.Content hidden>Checkout</Button.Content>
                </Button>
              </Link>
            ) : (
              <Button disabled animated="vertical" id="singleButton">
                <Button.Content visible>
                  <Icon.Group size="large">
                    <Icon name="shop" />
                    <Icon corner name="check circle" id="iconCheck" />
                  </Icon.Group>
                </Button.Content>
                <Button.Content hidden>Checkout</Button.Content>
              </Button>
            )}
          </div>
        )
      }
    }
  )
)
