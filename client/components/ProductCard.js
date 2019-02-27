import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ProductCard extends Component {
  render() {
    const {product} = this.props
    return (
      <Link to={`/products/${product.id}`} className="productCardContainer">
        <div className="productCardInner">
          <div className="productCardImageContainer">
            <img className="productCardImage" src={product.imgUrl} />
          </div>
          <div className="productCardText">
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
          </div>
        </div>
      </Link>
    )
  }
}
