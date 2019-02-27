const router = require('express').Router()
const {Orders} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const response = await Orders.findAll()
    res.json({
      message: 'Welcome!!!!'
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
