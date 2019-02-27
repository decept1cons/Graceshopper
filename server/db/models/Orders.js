const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('Orders', {
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Orders
