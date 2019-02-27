const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  products: {
    type: Sequelize.ARRAY(Sequelize.INT)
  }
})

module.exports = Order
