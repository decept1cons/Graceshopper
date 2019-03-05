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
        let orderList = []
        if (orders) {
          for (let time in orders) {
            console.log(time)
            orderList.push(
              <div key={time}>
                <div>{time}</div>
                <CartTable
                  cart={orders[time]}
                  key={orders[time].id}
                  isLoggedIn={!!this.props.userId}
                  disabled={true}
                />
              </div>
            )
          }
          return orderList
        } else {
          return <div>No orders</div>
        }
      }
    }
  )
)
