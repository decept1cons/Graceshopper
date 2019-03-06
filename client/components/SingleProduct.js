import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProduct} from '../store/productReducer'
import {addProductToCart} from '../store/cartReducer'
import {Button, Icon, Container} from 'semantic-ui-react'
import AnimatedButton from './AnimatedButton'

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

      reRender = () => {
        this.forceUpdate()
      }
      render() {
        const {product, userId, addProduct} = this.props
        return (
          <div className="singleProductContainer">
            <div className="singleProductInner">
              <div className="singleProductImageContainer">
                <img className="singleProductImage" src={product.imageUrl} />
              </div>

              <div className="singleProductText">
                <h1>{product.name}</h1>
                <h3>{`$${product.price}`}</h3>
                <AnimatedButton
                  userId={userId}
                  product={product}
                  addProduct={addProduct}
                  displayStr="Add To Cart"
                  displayIcon="shop"
                />
              </div>
            </div>
            <div className="singleProductDescription">
              {product.description}
            </div>
          </div>
        )
      }
    }
  )
)
