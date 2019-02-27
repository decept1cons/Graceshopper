const router = require('express').Router()
const {Order} = require('../db/models')

router.get('/', async (req, res, next) => {
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
