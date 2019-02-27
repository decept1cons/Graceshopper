import React, {Component} from 'react'

const dummyData = {
  id: 2,
  name: 'Product2',
  imgUrl: 'http://worldartsme.com/images/box-clipart-1.jpg',
  price: 10,
  type: 'Anothing Thing',
  skew: '1231ll'
}

export default class SingleProduct extends Component {
  render() {
    return (
      <div className="singleProductContainer">
        <div className="productCardImageContainer">
          <img className="productCardImage" src={dummyData.imgUrl} />
        </div>
        <div className="productCardText">
          <h1>{dummyData.name}</h1>
          <h3>{dummyData.price}</h3>
        </div>
      </div>
    )
  }
}
