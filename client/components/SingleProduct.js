import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProduct} from '../store/productReducer'
import {addProductToCart} from '../store/cartReducer'
import {Button, Icon} from 'semantic-ui-react'
import {_mutateCartButton} from '../helperfuncs/mutateCartButton'

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
        const {product, userId} = this.props
        return (
          <div className="singleProductContainer">
            <div className="singleProductInner">
              <div className="singleProductImageContainer">
                <img className="singleProductImage" src={product.imageUrl} />
              </div>
              <div className="singleProductText">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
              </div>
            </div>
            <div className="singleProductButton">
              {/*(userId, product, addProduct, cart)*/}
              <Button
                animated="vertical"
                id="singleButton"
                onClick={() =>
                  _mutateCartButton(
                    userId,
                    product,
                    {addProduct: this.props.addProduct},
                    null,
                    userId ? null : 'add',
                    this.reRender
                  )
                }
              >
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
                <Button.Content visible>Add to Cart</Button.Content>
              </Button>
            </div>
          </div>
        )
      }
    }
  )
)
