const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://pngimage.net/wp-content/uploads/2018/06/product-png.png'
  },
  price: {
    type: Sequelize.DECIMAL
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: `I have an awesome idea for a startup, i need you to build it for me can you make the logo bigger yes bigger bigger still the logo is too big we are a startup can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch we don't need a backup, it never goes down!. Is this the best we can do doing some work for us "pro bono" will really add to your portfolio i promise so make it pop.`
  }
})

module.exports = Product
