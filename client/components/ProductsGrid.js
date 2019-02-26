import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import {withStyles} from '@material-ui/core/styles'

const styles = () => ({
  card: {
    height: 300,
    width: 225
  }
})

const dummyData = [
  {
    id: 1,
    name: 'Product1',
    imgUrl:
      'https://fabrika-antey.ru/images/delivery-clipart-product-delivery-3.png',
    price: 5,
    type: 'Something',
    skew: '1230912a'
  },
  {
    id: 2,
    name: 'Product2',
    imgUrl: 'http://worldartsme.com/images/box-clipart-1.jpg',
    price: 10,
    type: 'Anothing Thing',
    skew: '1231ll'
  },
  {
    id: 3,
    name: 'Product3',
    imgUrl:
      'https://fabrika-antey.ru/images/delivery-clipart-product-delivery-3.png',
    price: 2,
    type: 'Type 3',
    skew: 'asdas9d8123'
  }
]
class ProductsGrid extends Component {
  render() {
    const {classes} = this.props

    return (
      <Grid container spacing={32} justify="space-around">
        {dummyData.map(productObj => (
          <ProductCard key={productObj.id} product={productObj} />
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(ProductsGrid)
