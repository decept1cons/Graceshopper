import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

export class OfflineCart extends Component {
  render() {
    return (
      <Table singleLine>
        <div>Offline Cart</div>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>//map over localStorage</Table.Body>
      </Table>
    )
  }
}
