const router = require('express').Router()
const {Order, Product} = require('../db/models')
const Op = require('sequelize').Op

router.get('/:id', async (req, res, next) => {
  const userId = req.params.id
  try {
    const response = await Order.findAll({
      where: {
        userId,
        status: {
          [Op.ne]: 'OPEN'
        }
      },
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

module.exports = router
