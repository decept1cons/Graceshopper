import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ProductGrid from './ProductGrid'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return <ProductGrid />
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
