const Sequelize = require('sequelize')
const db = require('../db')

const Shipping = db.define('shipping', {
  shippingInfo: {
    type: Sequelize.TEXT
  }
})

module.exports = Shipping
