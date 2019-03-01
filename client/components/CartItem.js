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
      getCart
    }) => {
      console.log('CARTITEM', name)
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
