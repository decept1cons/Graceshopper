/* eslint-disable react/display-name */
import React from 'react'
import {Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {me} from '../store/userReducer'
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

export default withRouter(
  connect(null, mapDispatchToProps)(
    ({
      cart: {
        price,
        quantity,
        productId,
        userId,
        product: {name, type, imageUrl},
        id
      },
      removeProduct,
      getCart,
      updateQuantity
    }) => {
      return (
        <Table.Row>
          <Table.Cell>
            <Link to={`/products/${productId}`}>
              <img className="cartItemImage" src={imageUrl} />
            </Link>
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{`$${price}`}</Table.Cell>
          <Table.Cell>{quantity}</Table.Cell>
          <Table.Cell>
            <Button
              content="+"
              onClick={() => {
                updateQuantity(id, userId, quantity + 1)
                getCart(userId)
              }}
            />
            <Button
              content="-"
              onClick={() => {
                updateQuantity(id, userId, quantity - 1)
                getCart(userId)
              }}
            />
          </Table.Cell>
          <Table.Cell>
            <Button
              content="Remove"
              onClick={() => {
                removeProduct(id, userId)
                //getCart(userId)
              }}
            />
          </Table.Cell>
        </Table.Row>
      )
    }
  )
)
