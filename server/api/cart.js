const router = require('express').Router()
const {Order, User, Product} = require('../db/models')

router.get('/:id', async (req, res, next) => {
  const userId = req.params.id
  try {
    const response = await Order.findAll({
      where: {userId},
      include: [
        {
          model: Product,
          attributes: ['imageUrl', 'name', 'type']
        }
      ]
    })
    res.json(response)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

const updateQuantity = async obj => {
  const updatedQuantity = obj.quantity + 1
  let updatedOrder = await Order.update(
    {quantity: updatedQuantity},
    {
      where: {id: obj.id}
    }
  )
  return updatedOrder
}
router.post('/:id', async (req, res, next) => {
  const {price, productId, userId} = req.body
  try {
    let [instance, created] = await Order.findOrCreate({
      where: {price, productId, userId}
    })
    //findOrCreate returns an array with 0th as instance, 1st as boolean representing created (T) or found (F)
    if (!created) updateQuantity(instance)

    const eagerLoadedOrder = await Order.findOne({
      where: {id: instance.id},
      include: [
        {
          model: Product,
          attributes: ['imageUrl', 'name', 'type']
        }
      ]
    })

    res.status(201).json({eagerLoadedOrder, create: created})
  } catch (error) {
    console.log(error)
    next(error)
  }
})
router.delete('/:id/item/:orderId', (req, res, next) => {
  const id = req.params.orderId
  Order.destroy({where: {id}})
    .then(orderItem => res.json(orderItem))
    .catch(next)
})

module.exports = router
