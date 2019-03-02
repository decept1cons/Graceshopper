/* eslint-disable react/display-name */
import React from 'react'
import {Icon} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

export default ({quantity}) => (
  <div className="navigationLoggedOut">
    <Link to="/login">
      <h1 className="navLink">DECEPTICONS</h1>
    </Link>
    <div className="navRight">
      {/* The navbar will show these links before you log in */}
      <Link className="navLink" to="/signup">
        Sign Up
      </Link>
      <Link className="navLink" to="/login">
        <Icon name="sign-in" />
      </Link>
      <Link className="navLink" to="/cart">
        <Icon name="shop" />
      </Link>
    </div>
  </div>
)
