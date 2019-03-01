import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchCart} from '../store/cartReducer'
import CartItem from './CartItem'
import {Table} from 'semantic-ui-react'
import ls from 'local-storage'

const mapStateToProps = ({userReducer, cartReducer}) => ({
  userId: userReducer.id,
  cart: cartReducer.cart
})

// const mapDispatchToProps = dispatch => ({
//   getCart: id => dispatch(fetchCart(id))
// })

export default withRouter(
  connect(mapStateToProps)(
    class OfflineCart extends Component {
      componentDidMount() {
        const {getCart, userId} = this.props
        // getCart(userId)
      }

      // foo() {}
      render() {
        const cart = Object.values(window.localStorage)
        const someData = cart.map(item => JSON.parse(item))
        console.log(someData)

        //START OF T&T's CODE ----------------------------------------------------------------------

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
              {someData.map((cartObj, i) => (
                <CartItem cart={cartObj} key={i} />
              ))}
            </Table.Body>
          </Table>
        )
      }
    }
  )
)
