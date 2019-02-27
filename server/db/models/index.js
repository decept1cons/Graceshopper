const User = require('./user')
const Products = require('./products')
const PreviousOrders = require('./previousOrders')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Products.belongsToMany(User, {through: 'cart'})
User.belongsToMany(Products, {through: 'cart'})
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Products,
  PreviousOrders
}
