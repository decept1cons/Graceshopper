/* eslint-disable react/display-name */
import React from 'react'
import {Table, Button} from 'semantic-ui-react'

export default ({
  cart: {price, quantity, product: {name, type, imageUrl}, id}
}) => {
  console.log('CARTITEM', name)
  return (
    <Table.Row>
      <Table.Cell>
        <img className="cartItemImage" src={imageUrl} />
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{`$${price}`}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>
        <Button content="Remove" />
      </Table.Cell>
    </Table.Row>
  )
}
