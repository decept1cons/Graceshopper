/* eslint-disable react/display-name */
import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {_mutateCartButton} from '../helperfuncs/mutateCartButton'
export default ({userId, product, addProduct, displayStr, displayIcon}) => (
  <div className="singleProductButton">
    <Button
      animated="vertical"
      id="singleButton"
      onClick={() =>
        _mutateCartButton(
          userId,
          product,
          {addProduct},
          null,
          userId ? null : 'add'
        )
      }
    >
      <Button.Content hidden>
        <Icon name={displayIcon} />
      </Button.Content>
      <Button.Content visible>{displayStr}</Button.Content>
    </Button>
  </div>
)
