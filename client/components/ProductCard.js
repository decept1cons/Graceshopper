import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ProductCard extends Component {
  render() {
    const {product} = this.props
    return (
      <Link to={`/products/${product.id}`} className="productCardContainer">
        <div className="productCardInner">
          <div className="productCardImageContainer">
            <img className="productCardImage" src={product.imageUrl} />
          </div>
          <div className="productCardText">
            <div className="productTitle">{product.name}</div>
            <div className="productPrice">{product.price}</div>
          </div>
        </div>
      </Link>
    )
  }
}
