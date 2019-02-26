const Sequelize = require('sequelize')
const db = require('../db')

const PreviousOrders = db.define('previousOrders', {
  productId: {type: Sequelize.STRING},
  userId: {type: Sequelize.STRING}
})

module.exports = PreviousOrders
