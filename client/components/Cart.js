import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cartReducer'
const mapStateToProps = ({userReducer, cartReducer}) => ({
  userId: userReducer.id,
  cart: cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  class Cart extends Component {
    componentDidMount() {
      console.log('componentDidMount')
      const {getCart, userId} = this.props
      getCart(userId)
    }
    render() {
      console.log('componentDidMount')
      console.log(this.props.cart)
      return (
        <div id="cartContainer">
          yeet
          {/* {this.props.cart.map(cartObj => (
            <CartItem key={cartObj.id} cart={cartObj} />
          ))} */}
        </div>
      )
    }
  }
)
