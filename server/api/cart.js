const router = require('express').Router()
const {Order, User, Product} = require('../db/models')

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const response = await Order.findOne({
      include: [
        {
          model: Product
        }
      ]
    })
    console.log(response.data)
    res.json(response)
  } catch (error) {
    console.log(error)
    next(error)
  }
  // Order.findAll({where: {userId}}, {include: [User, Product]})
  //   .then(response => {
  //     console.log(response)
  //     res.status(200).json(response)
  //   })
  //   .catch(next)
})

router.post('/:id/:productId', async (req, res, next) => {
  try {
    const response = await Order.findAll()
    console.log(response)
    res.json({
      "here's the data": response
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.delete('/:id/:productId', async (req, res, next) => {
  try {
    const response = await Order.findAll()
    console.log(response)
    res.json({
      "here's the data": response
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.put('/:id/:productId', async (req, res, next) => {
  try {
    const response = await Order.findAll()
    console.log(response)
    res.json({
      "here's the data": response
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
