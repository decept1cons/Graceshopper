import React from 'react'
import {connect} from 'react-redux'
import ProductGrid from './ProductGrid'
import CompletedOrderDisplay from './CompletedOrderDisplay'
const mapState = ({userReducer, cartReducer}) => ({
  email: userReducer.email,
  mostRecentOrder: cartReducer.mostRecentOrder
})

export default connect(mapState)(({email, mostRecentOrder}) => {
  return (
    <div>
      {Object.keys(mostRecentOrder).length ? (
        <CompletedOrderDisplay gsId={mostRecentOrder.gsId} />
      ) : null}
      <ProductGrid />
    </div>
  )
})
