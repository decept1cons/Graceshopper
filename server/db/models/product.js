const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://pngimage.net/wp-content/uploads/2018/06/product-png.png'
  },
  price: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Product
