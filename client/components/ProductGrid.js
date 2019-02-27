import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import ProductCard from './ProductCard'
import {deleteProduct, fetchProducts} from '../store/productReducer'

const mapStateToProps = ({productReducer}) => ({
  products: productReducer.products
})
const mapDispatchToProps = dispatch => ({
  deleteProduct: product => dispatch(deleteProduct(product)),
  fetchProducts: () => dispatch(fetchProducts())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    class ProductGrid extends Component {
      constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
      }
      componentDidMount() {
        this.props.fetchProducts()
      }
      handleDelete(product) {
        this.props.deleteProduct(product)
        this.props.fetchProducts()
      }
      render() {
        return (
          <div id="productGridContainer">
            {this.props.products.map(productObj => (
              <ProductCard key={productObj.id} product={productObj} />
            ))}
          </div>
        )
      }
    }
  )
)
