/* eslint-disable react/display-name */

import React from 'react'
import {Table} from 'semantic-ui-react'
import CartItem from './CartItem'
export default ({cart}) => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Remove</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {cart.map(cartObj => <CartItem cart={cartObj} key={cartObj.id} />)}
    </Table.Body>
  </Table>
)
