const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payment', {
  paymentName: {
    type: Sequelize.STRING
  },
  paymentNumber: {
    type: Sequelize.INTEGER,
    validate: {
      isCreditCard: true
    }
  },
  paymentType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['VISA', 'MasterCard', 'Discover']]
    }
  },
  paymentExpMonth: {
    type: Sequelize.STRING,
    validate: {
      min: 1,
      max: 12
    }
  },
  paymentExpYear: {
    type: Sequelize.STRING,
    validate: {
      min: new Date().getFullYear(),
      max: new Date().getFullYear() + 10
    }
  }
})

module.exports = Payment
