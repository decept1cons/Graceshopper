import React from 'react'
import {connect} from 'react-redux'
import ProductGrid from './ProductGrid'

const mapState = ({userReducer}) => ({
  email: userReducer.email
})

export default connect(mapState)(({email}) => <ProductGrid />)
