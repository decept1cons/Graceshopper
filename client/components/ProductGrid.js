import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import ProductCard from './ProductCard'
import {deleteProduct, fetchProducts} from '../store/productReducer'
import {Dropdown} from 'semantic-ui-react'
import {_getProductType} from '../helperfuncs/getProductType'
import {typeObj} from '../helperfuncs/typeObj'
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
        this.state = {
          searchWord: '',
          dropdown: ''
        }
      }
      componentDidMount() {
        this.props.fetchProducts()
      }
      handleDelete = product => {
        this.props.deleteProduct(product)
        this.props.fetchProducts()
      }

      handleChange = event => {
        this.setState({
          searchWord: event.target.value
        })
      }

      render() {
        return (
          <div className="search-bar">
            <div className="ui icon input">
              <input
                onChange={this.handleChange}
                value={this.state.searchWord}
                name="search"
                type="text"
                placeholder="Search..."
              />
              <i aria-hidden="true" className="search circular link icon" />
            </div>
            <div id="productGridContainer">
              {this.props.products
                .filter(item => {
                  return item.name
                    .toLowerCase()
                    .includes(this.state.searchWord.toLowerCase())
                })
                .map(productObj => (
                  <ProductCard key={productObj.id} product={productObj} />
                ))}
            </div>
          </div>
        )
      }
    }
  )
)
