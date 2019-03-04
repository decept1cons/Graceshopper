/* eslint-disable react/display-name */
import React from 'react'
import {Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {removeProductFromCart, fetchCart} from '../store/cartReducer'

const mapDispatchToProps = dispatch => ({
  removeProduct: (orderId, userId) =>
    dispatch(removeProductFromCart(orderId, userId)),
  getCart: id => dispatch(fetchCart(id))
})

export default withRouter(
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
            <Button content="Remove" />
          </Table.Cell>
        </Table.Row>
      )
    } else {
      return (
        <Table.Row>
          <Table.Cell>
            <img className="cartItemImage" src={props.cart.product.imageUrl} />
          </Table.Cell>
          <Table.Cell>{props.cart.product.name}</Table.Cell>
          <Table.Cell>{`$${props.cart.price}`}</Table.Cell>
          <Table.Cell>{props.cart.quantity}</Table.Cell>
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
