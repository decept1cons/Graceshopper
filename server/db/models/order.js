const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'OPEN'
    //open, paid, shipped, submitted
  },
  gsId: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Order
