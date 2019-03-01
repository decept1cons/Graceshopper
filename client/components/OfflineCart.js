import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchCart} from '../store/cartReducer'
import CartItem from './CartItem'
import {Table} from 'semantic-ui-react'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  userId: userReducer.id,
  cart: cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: id => dispatch(fetchCart(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class OfflineCart extends Component {
      componentDidMount() {
        const {getCart, userId} = this.props
        getCart(userId)
        localStorage.setItem('cart', JSON.stringify(this.props.cart))
      }

      // foo() {}
      render() {
        console.log(this.props.cart)

        //START OF T&T's CODE ----------------------------------------------------------------------
        const jsonData = localStorage.getItem('cart')
        const cartProducts = JSON.parse(jsonData)
        console.log(cartProducts)
        return (
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* {this.props.cart.map(cartObj => (
                <CartItem cart={cartObj} key={cartObj.id} />
              ))} */}
            </Table.Body>
          </Table>
        )
      }
    }
  )
)
