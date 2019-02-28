import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/productReducer'
import {Button, Icon} from 'semantic-ui-react'

const mapStateToProps = ({productReducer}) => ({
  product: productReducer.product
})

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  class SingleProduct extends Component {
    componentDidMount() {
      this.props.getProduct(this.props.match.params.id)
    }

    render() {
      const {product} = this.props
      return (
        <div className="singleProductContainer">
          <div className="singleProductImageContainer">
            <img className="singleProductImage" src={product.imageUrl} />
          </div>
          <div className="singleProductText">
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
          </div>
          <Button animated="vertical" className="singleProductButton">
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
