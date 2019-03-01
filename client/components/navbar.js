import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import LoggedInNavBar from './LoggedInNavBar'
import LoggedOutNavBar from './LoggedOutNavBar'

const mapState = ({userReducer}) => {
  return {
    isLoggedIn: !!userReducer.id,
    user: userReducer
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
export default withRouter(
  connect(mapState, mapDispatch)(({handleClick, isLoggedIn, user}) => (
    <nav>
      {isLoggedIn ? (
        <LoggedInNavBar handleClick={handleClick} email={user.email} />
      ) : (
        <LoggedOutNavBar />
      )}
    </nav>
  ))
)
