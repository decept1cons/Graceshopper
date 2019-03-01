/* eslint-disable react/display-name */
import React from 'react'
import {Icon} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

export default ({handleClick, email}) => (
  <div className="navigationLoggedIn">
    <Link to="/home">
      <h1 className="navLink">DECEPTICONS</h1>
    </Link>
    <div className="navRight">
      {/* The navbar will show these links after you log in */}
      <Link className="navLink" to="/home">
        <Icon name="home" />
      </Link>
      <Link className="navLink" to="/cart">
        <Icon name="shop" />
      </Link>
      <a href="#" className="navLink" onClick={handleClick}>
        <Icon name="sign-out" />
      </a>
      <Link to="/account">
        <span className="welcomeEmail navLink">Hi, {email} !</span>
      </Link>
    </div>
  </div>
)
