import React, {Component} from 'react'
import {Card, Icon, Image, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchCart} from '../store/cartReducer'
class UserAccount extends Component {
  componentDidMount() {
    this.props.fetch(this.props.user.id)
  }
  render() {
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
              You have {this.props.userCart.cart.length} item(s) in cart.
            </Link>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
const dispatchState = reducer => {
  return {fetch: id => reducer(fetchCart(id))}
}
const mapState = ({userReducer, cartReducer}) => {
  return {
    user: userReducer,
    userCart: cartReducer
  }
}
export default connect(mapState, dispatchState)(UserAccount)
