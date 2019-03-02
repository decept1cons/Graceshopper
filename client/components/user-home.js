import React from 'react'
import {connect} from 'react-redux'
import ProductGrid from './ProductGrid'

const mapState = ({userReducer, cartReducer}) => ({
  email: userReducer.email,
  mostRecentOrder: cartReducer.mostRecentOrder
})

export default connect(mapState)(({email}) => (
  <div>
    <ProductGrid />
  </div>
))
