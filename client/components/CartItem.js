/* eslint-disable react/display-name */
import React, {Component} from 'react'
import {Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {me} from '../store/userReducer'
import {
  removeProductFromCart,
  fetchCart,
  updateQuantityOfCartItem
} from '../store/cartReducer'
import {_mutateCartButton} from '../helperfuncs/mutateCartButton'
import {_removeProductButton} from '../helperfuncs/removeProductButton'

const mapDispatchToProps = dispatch => ({
  removeProduct: (orderId, userId) =>
    dispatch(removeProductFromCart(orderId, userId)),
  getCart: id => dispatch(fetchCart(id)),
  updateQuantity: (orderId, userId, newQuantity) =>
    dispatch(updateQuantityOfCartItem(orderId, userId, newQuantity)),
  loadInitialData: () => dispatch(me())
})

export default withRouter(
  connect(null, mapDispatchToProps)(
    class CartItem extends Component {
      render() {
        return (
          <Table.Row>
            <Table.Cell>
              <Link to={`/products/${this.props.cartItem.id}`}>
                <img
                  className="cartItemImage"
                  src={
                    this.props.isLoggedIn
                      ? this.props.cartItem.product.imageUrl
                      : this.props.cartItem.imageUrl
                  }
                />
              </Link>
            </Table.Cell>

            <Table.Cell textAlign="center">
              {this.props.isLoggedIn
                ? this.props.cartItem.product.name
                : this.props.cartItem.name}
            </Table.Cell>
            <Table.Cell textAlign="center">{`$${
              this.props.cartItem.price
            }`}</Table.Cell>
            <Table.Cell textAlign="center">
              <div id="quantContainer">
                <div id="quantTextContainer">
                  {this.props.cartItem.quantity}
                </div>
                <div id="quantButtonContainer">
                  <Button
                    content="▲"
                    id="quantButton"
                    disabled={this.props.disabled}
                    onClick={() =>
                      _mutateCartButton(
                        this.props.cartItem.userId,
                        this.props.cartItem,
                        {
                          updateQuantity: this.props.updateQuantity,
                          getCart: this.props.getCart
                        },
                        this.props.isLoggedIn ? this.props.cartItem : null,
                        'add',
                        this.props.reRender
                      )
                    }
                  />
                  <Button
                    content="▼"
                    id="quantButton"
                    disabled={this.props.disabled}
                    onClick={() =>
                      _mutateCartButton(
                        this.props.cartItem.userId,
                        this.props.cartItem,
                        {
                          updateQuantity: this.props.updateQuantity,
                          getCart: this.props.getCart
                        },
                        this.props.isLoggedIn ? this.props.cartItem : null,
                        'subtract',
                        this.props.reRender
                      )
                    }
                  />
                </div>
              </div>
            </Table.Cell>
            <Table.Cell textAlign="center">
              {`$${Math.round(
                this.props.cartItem.price * this.props.cartItem.quantity
              )}`}
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Button
                content="Remove Row"
                disabled={this.props.disabled}
                onClick={() => {
                  _removeProductButton(
                    this.props.isLoggedIn,
                    this.props.removeProduct,
                    this.props.cartItem,
                    this.props.reRender
                  )
                }}
              />
            </Table.Cell>
          </Table.Row>
        )
      }
    }
  )
)
