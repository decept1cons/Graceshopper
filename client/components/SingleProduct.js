import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProduct} from '../store/productReducer'
import {addProductToCart} from '../store/cartReducer'
import {Button, Icon} from 'semantic-ui-react'

const mapStateToProps = ({userReducer, productReducer}) => ({
  userId: userReducer.id,
  product: productReducer.product
})

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(fetchProduct(id)),
  addProduct: (productId, userId, price) =>
    dispatch(addProductToCart(productId, userId, price))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class SingleProduct extends Component {
      componentDidMount() {
        this.props.getProduct(this.props.match.params.id)
      }

      render() {
        const {product, userId} = this.props
        console.log(userId)
        return (
          <div className="singleProductContainer">
            <div className="singleProductImageContainer">
              <img className="singleProductImage" src={product.imageUrl} />
            </div>
            <div className="singleProductText">
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
            </div>
            <Button
              animated="vertical"
              className="singleProductButton"
              onClick={() => {
                console.log('hi')
                this.props.addProduct(product.id, userId, product.price)
              }}
            >
              <Button.Content hidden>
                <Icon name="shop" />
              </Button.Content>
              <Button.Content visible>Add to Cart</Button.Content>
            </Button>
          </div>
        )
      }
    }
  )
)
