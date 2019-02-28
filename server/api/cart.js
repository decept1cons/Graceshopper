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
  // Order.findAll({where: {userId}}, {include: [User, Product]})
  //   .then(response => {
  //     console.log(response)
  //     res.status(200).json(response)
  //   })
  //   .catch(next)
})

router.post('/:id', (req, res, next) => {
  const {price, productId, userId} = req.body

  Order.create({price, productId, userId})
    .then(response => response.get())
    .then(newOrder =>
      Order.findOne({
        where: {id: newOrder.id},
        include: [
          {
            model: Product,
            attributes: ['imageUrl', 'name', 'type']
          }
        ]
      })
    )
    .then(resp => res.status(201).json(resp))
    .catch(next)

  //   const final = await newOrder.findAll({
  //     include: [
  //       {
  //         model: Product,
  //         attributes: ['imageUrl', 'name', 'type']
  //       }
  //     ]
  //   })
  //   console.log(final)
  //   res.status(201).json(final)
  // } catch (error) {
  //   console.log(error)
  //   next(error)
  // }
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
