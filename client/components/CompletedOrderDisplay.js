/* eslint-disable react/display-name */
import React from 'react'
import {Item, Button} from 'semantic-ui-react'

export default ({gsId}) => {
  console.log('gsid', gsId)
  return (
    <Item className="completedOrderDisplay">
      <Item.Image
        size="small"
        src="https://www.brandignity.com/wp-content/uploads/2015/07/thank-you.jpg"
      />

      <Item.Content verticalAlign="middle">
        <Item.Header>{gsId}</Item.Header>
        <Item.Description>' '</Item.Description>
        <Item.Extra>
          <Button floated="right">Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}
