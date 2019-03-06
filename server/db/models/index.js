const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Payment = require('./payment')
const Shipping = require('./shipping')

User.hasMany(Order)
Order.belongsTo(User)
Product.hasMany(Order)
Order.belongsTo(Product)
User.hasMany(Payment)
Payment.belongsTo(User)
User.hasMany(Shipping)
Shipping.belongsTo(User)

module.exports = {
  User,
  Product,
  Order
}
