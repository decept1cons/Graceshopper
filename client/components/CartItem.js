/* eslint-disable react/display-name */
import React from 'react'
import {Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {me} from '../store/userReducer'
import {withToastManager} from 'react-toast-notifications'
import {
  removeProductFromCart,
  fetchCart,
  updateQuantityOfCartItem
} from '../store/cartReducer'

const mapDispatchToProps = dispatch => ({
  removeProduct: (orderId, userId) =>
    dispatch(removeProductFromCart(orderId, userId)),
  getCart: id => dispatch(fetchCart(id)),
  updateQuantity: (orderId, userId, newQuantity) =>
    dispatch(updateQuantityOfCartItem(orderId, userId, newQuantity)),
  loadInitialData: () => dispatch(me())
})

export default withToastManager(
  withRouter(
    connect(null, mapDispatchToProps)(props => {
      if (!props.cart.userId) {
        return (
          <Table.Row>
            <Table.Cell>
              <img className="cartItemImage" src={props.cart.imageUrl} />
            </Table.Cell>
            <Table.Cell>{props.cart.name}</Table.Cell>
            <Table.Cell>{`$${props.cart.price}`}</Table.Cell>
            <Table.Cell>{props.cart.quantity}</Table.Cell>
            <Table.Cell>
              <Button
                onClick={() => {
                  props.toastManager.add(`Item Removed`, {
                    appearance: 'success',
                    autoDismiss: true
                  })
                }}
                content="x"
              />
            </Table.Cell>
          </Table.Row>
        )
      } else {
        return (
          <Table.Row>
            <Table.Cell>
              <img
                className="cartItemImage"
                src={props.cart.product.imageUrl}
              />
            </Table.Cell>
            <Table.Cell>{props.cart.product.name}</Table.Cell>
            <Table.Cell>{`$${props.cart.price}`}</Table.Cell>
            <Table.Cell>{props.cart.quantity}</Table.Cell>
            <Table.Cell>
              <Button
                content="+"
                onClick={() => {
                  props.updateQuantity(
                    props.cart.id,
                    props.cart.userId,
                    props.cart.quantity + 1
                  )
                  props.getCart(props.cart.userId)
                }}
              />
              <Button
                content="-"
                onClick={() => {
                  props.updateQuantity(
                    props.cart.id,
                    props.cart.userId,
                    props.cart.quantity - 1
                  )
                  props.getCart(props.cart.userId)
                }}
              />
            </Table.Cell>
            <Table.Cell>
              <Button
                content="Remove"
                onClick={() => {
                  props.removeProduct(props.cart.id, props.cart.userId)
                  //getCart(userId)
                }}
              />
            </Table.Cell>
          </Table.Row>
        )
      }
    })
  )
)
