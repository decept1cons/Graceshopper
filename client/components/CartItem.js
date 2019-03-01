/* eslint-disable react/display-name */
import React from 'react'
import {Table, Button} from 'semantic-ui-react'

export default props => {
  console.log('CARTITEM', name)
  console.log(props, 'lalal')

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
          <Button content="Remove" />
        </Table.Cell>
      </Table.Row>
    )
  }
}

// cart: {price, quantity, product: {name, type, imageUrl}, id}
