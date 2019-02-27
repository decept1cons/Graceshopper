const User = require('./user')
const Products = require('./products')
const Orders = require('./Orders')

User.hasMany(Orders)
Orders.belongsTo(User)
Orders.hasMany(Products)
Products.belongsTo(Orders)

module.exports = {
  User,
  Products,
  Orders
}
