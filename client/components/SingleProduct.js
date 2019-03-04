import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProduct} from '../store/productReducer'
import {addProductToCart} from '../store/cartReducer'
import {Button, Icon} from 'semantic-ui-react'
import ls from 'local-storage'
let count = 0

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
              <Button
                animated="vertical"
                id="singleButton"
                onClick={() => {
                  if (this.props.userId) {
                    this.props.addProduct(product.id, userId, product.price)
                  } else {
                    const cart = Object.values(window.localStorage)
                    const someData = cart.map(item => JSON.parse(item))
                    let newProduct = Object.assign({}, product)
                    if (someData.length) {
                      //not zero
                      let filteredData = someData.filter(internalObject => {
                        if (internalObject.id === newProduct.id) {
                          return internalObject
                        }
                      })
                      newProduct.quantity = filteredData.length
                        ? filteredData[0].quantity + 1
                        : 1

                      ls.set(newProduct.id, newProduct)
                    } else {
                      newProduct.quantity = 1
                      ls.set(newProduct.id, newProduct)
                    }
                  }
                }}
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
