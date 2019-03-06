/* eslint-disable guard-for-in */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchOrders} from '../store/orderReducer'
import CartTable from './CartTable'
import {Button, Icon} from 'semantic-ui-react'
import {_groupOrders} from '../helperfuncs/groupOrders'

const mapStateToProps = ({userReducer, orderReducer}) => ({
  userId: userReducer.id,
  orders: orderReducer.orders
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(fetchOrders(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class PreviousOrders extends Component {
      componentDidMount() {
        const {getOrders, userId} = this.props
        if (userId) getOrders(userId)
      }
      render() {
        let orders = _groupOrders(this.props.orders)
        if (orders) {
          return Object.keys(orders)
            .sort()
            .reverse()
            .map(time => (
              <div key={time}>
                <div>{new Date(+time).toString()}</div>
                <CartTable
                  cart={orders[time]}
                  key={orders[time].id}
                  isLoggedIn={!!this.props.userId}
                  disabled={true}
                />
              </div>
            ))
        } else {
          return <div>No orders</div>
        }
      }
    }
  )
)
