import React, {Component} from 'react'
import {Card, Icon, Image, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchCart} from '../store/cartReducer'
import {fetchOrders} from '../store/orderReducer'
import {_calcQuantity} from '../helperfuncs/calcQuantity'
import {_groupOrders} from '../helperfuncs/groupOrders'

const mapState = ({userReducer, cartReducer, orderReducer}) => ({
  user: userReducer,
  cart: cartReducer.cart,
  orders: orderReducer.orders
})
const dispatchState = dispatch => ({
  getCart: id => dispatch(fetchCart(id)),
  getOrders: id => dispatch(fetchOrders(id))
})

export default withRouter(
  connect(mapState, dispatchState)(
    class UserAccount extends Component {
      componentDidMount() {
        const {getOrders, getCart, user} = this.props
        getCart(user.id)
        getOrders(user.id)
      }
      render() {
        console.log(_groupOrders(this.props.orders))
        return (
          <div>
            <Container textAlign="center">Welcome back!!!</Container>
            <Card size="medium" centered>
              <Image src={this.props.user.imageUrl} />
              <Card.Content>
                <Card.Header>{this.props.user.email}</Card.Header>
                <Card.Meta>
                  <span className="date">
                    Joined in {this.props.user.createdAt.slice(0, 4)}
                  </span>
                </Card.Meta>
                <Card.Description>
                  <Link to="/">Update Information</Link>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to="/cart">
                  <i aria-hidden="true" className="shop icon" />
                  You have {_calcQuantity(this.props.cart)} item(s) in cart.
                </Link>
              </Card.Content>
              <Card.Content extra>
                <Link to="/orders">
                  <i aria-hidden="true" className="shop icon" />
                  {`You have ${
                    Object.keys(_groupOrders(this.props.orders)).length
                  } Previous Order(s).`}
                </Link>
              </Card.Content>
            </Card>
          </div>
        )
      }
    }
  )
)
