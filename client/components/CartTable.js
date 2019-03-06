/* eslint-disable react/display-name */

import React from 'react'
import {Table} from 'semantic-ui-react'
import CartItem from './CartItem'
import {_calcTotal} from '../helperfuncs/calcTotal'
import {_calcQuantity} from '../helperfuncs/calcQuantity'
export default ({cart, disabled, reRender, isLoggedIn}) => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Item Price</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Item Quantity</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Item Total</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Remove Row</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {cart
        .sort((a, b) => {
          let val1 = isLoggedIn ? a.product.name : a.name
          let val2 = isLoggedIn ? b.product.name : b.name
          return val1 < val2 ? -1 : 1
        })
        .map(cartObj => (
          <CartItem
            cartItem={cartObj}
            disabled={disabled}
            key={cartObj.id}
            reRender={reRender}
            isLoggedIn={isLoggedIn}
          />
        ))}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>Total</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell textAlign="center">
          {_calcQuantity(cart)}
        </Table.HeaderCell>
        <Table.HeaderCell textAlign="center">{`$${_calcTotal(
          cart
        )}`}</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Footer>
  </Table>
)
