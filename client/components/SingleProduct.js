import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/productReducer'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  render() {
    const {product} = this.props
    return (
      <div className="singleProductContainer">
        <div className="productCardImageContainer">
          <img className="productCardImage" src={product.imgUrl} />
        </div>
        <div className="productCardText">
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({productReducer}) => ({
  product: productReducer.product
})

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
