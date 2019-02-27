'use strict'

const db = require('../server/db')
const {User, Products} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const fakeUsers = [
    {email: 'hcurnokk0@sun.com', password: 'qjAfL8KrgO9G'},
    {email: 'jenstone1@ibm.com', password: 'MudMHqf3JDw'},
    {email: 'cmacinnes2@cornell.edu', password: 'TRRdTpp'},
    {email: 'lkingsnod3@github.io', password: 'NVAlgjw38'},
    {email: 'syurtsev4@1688.com', password: 'EKVAcsKdjA7X'},
    {email: 'nmccomish5@a8.net', password: 'U3Nk5jh2gNoe'},
    {email: 'adiloway6@mysql.com', password: '7qLiY3A8'},
    {email: 'lhenner7@friendfeed.com', password: 'dKyBro'},
    {email: 'pjorger8@nymag.com', password: 'c8sU5j4H'},
    {email: 'brubbens9@hubpages.com', password: 'N5scoi'},
    {email: 'cugonia@over-blog.com', password: 'qvOR2lNl'},
    {email: 'camsbergerb@fda.gov', password: 'hZYDaMukukzl'},
    {email: 'aburnsidesc@feedburner.com', password: 'UxKQVu'},
    {email: 'bdruittd@cnet.com', password: 'C8x4rwtrOOdj'},
    {email: 'cmelbye@npr.org', password: '58cDimLr'},
    {email: 'bkaddf@foxnews.com', password: 'SH3azPUsQqU'},
    {email: 'ithormanng@hhs.gov', password: 'nbmyrpxC'},
    {email: 'lesselenh@mozilla.org', password: 'Cry2V0zdzwdI'},
    {email: 'gsleepi@pbs.org', password: 'uzp7mleY3'},
    {email: 'agarattyj@jigsy.com', password: 'B1AHkpue'}
  ]

  const fakeProducts = [
    {name: 'Tracker', type: 'Geo', price: '23265.59'},
    {name: 'Impala', type: 'Chevrolet', price: '15542.74'},
    {name: '911', type: 'Porsche', price: '79241.07'},
    {name: 'Pacifica', type: 'Chrysler', price: '23489.51'},
    {name: 'X5 M', type: 'BMW', price: '34264.34'},
    {name: 'Tacoma Xtra', type: 'Toyota', price: '19142.72'},
    {name: 'Sentra', type: 'Nissan', price: '20720.80'},
    {name: 'Pathfinder Armada', type: 'Nissan', price: '29463.50'},
    {name: 'CX-5', type: 'Mazda', price: '27564.40'},
    {name: 'Diablo', type: 'Lamborghini', price: '170030.69'},
    {name: '900', type: 'Saab', price: '18849.89'},
    {name: 'Escape', type: 'Ford', price: '22257.88'},
    {name: 'Ram', type: 'Dodge', price: '18007.67'},
    {name: 'ES 350 FSport', type: 'Lexus', price: '45585.57'},
    {name: '3500', type: 'GMC', price: '20556.84'},
    {name: 'Dakota', type: 'Dodge', price: '22630.25'},
    {name: 'Mustang', type: 'Ford', price: '24386.94'},
    {name: 'Grand Marquis', type: 'Mercury', price: '27235.79'},
    {name: 'a3', type: 'Audi', price: '35006.47'},
    {name: 'Passat', type: 'Volkswagen', price: '22598.57'}
  ]

  const users = await Promise.all(
    fakeUsers.map(eachUser => {
      return User.create(eachUser)
    })
  )

  const products = await Promise.all(
    fakeProducts.map(eachProduct => {
      return Products.create(eachProduct)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
