'use strict'

const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')

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
    {
      name: 'Geo Tracker',
      type: 'Sedan',
      price: '23265.59',
      imageUrl:
        'https://cdn04.carsforsale.com/3/285163/24814841/thumb/1160443039.jpg'
    },
    {
      name: 'Chevrolet Impala',
      type: 'Mid-Size Car',
      price: '15542.74',
      imageUrl:
        'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2019/cars/impala/colorizer/01-images/2019-impala-2lz-g1m-colorizer.jpg?imwidth=1200'
    },
    {
      name: 'Porsche 911',
      type: 'Sports Car',
      price: '79241.07',
      imageUrl:
        'https://4d5f5de51693cfc684da-cb2084ba1892d6fbfdf4063f34f87a51.ssl.cf1.rackcdn.com/thumbnails/WP0AA2A98JS106602/cad933efc0a434099e5ca5137b85bbf5.jpg'
    },
    {
      name: 'Chrysler Pacifica',
      type: 'Minivan',
      price: '23489.51',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/2018-chrysler-pacifica-mmp-1544038058.jpg'
    },
    {
      name: 'BMW X5 M',
      type: 'SUV',
      price: '34264.34',
      imageUrl:
        'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/07/2017-BMW-X5-M-110-1.jpg'
    },
    {
      name: 'Toyota Tacoma',
      type: 'Pickup Truck',
      price: '19142.72',
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC90TOT092A021001.jpg'
    },
    {
      name: 'Nissan Sentra',
      type: 'Compact',
      price: '20720.80',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/2017_Nissan_Sentra_sedan_in_Yucca_Valley.jpg'
    },
    {
      name: 'Nissan Pathfinder',
      type: 'SUV',
      price: '29463.50',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/8b/2018_Nissan_Pathfinder_%28R52_MY18%29_ST-L_wagon_%282018-09-28%29_01.jpg'
    },
    {
      name: 'Mazda CX-5',
      type: 'SUV',
      price: '27564.40',
      imageUrl:
        'https://www.tradecarview.com/cdn/cvmaterials/modelimages/gallery/5/244638.jpg'
    },
    {
      name: 'Lamborghini Diablo',
      type: 'Sports Car',
      price: '170030.69',
      imageUrl:
        'https://content.autotrader.com/content/dam/autotrader/articles/OversteerImages/2018/August/dougDiablo/ed4c15743338471da52163cfb4774296.jpg'
    },
    {
      name: 'Saab 900',
      type: 'Compact',
      price: '18849.89',
      imageUrl:
        'https://cdn.bringatrailer.com/wp-content/uploads/2016/10/IMG_20170418_182151-940x705.jpg'
    },
    {
      name: 'Ford Escape',
      type: 'SUV',
      price: '22257.88',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/78/2018_Ford_Escape_%28ZG%29_Trend_AWD_wagon_%282018-10-29%29_01.jpg'
    },
    {
      name: 'Dodge Ram',
      type: 'Pickup Truck',
      price: '18007.67',
      imageUrl: 'https://img2.carmax.com/img/vehicles/16766111/1/385.jpg'
    },
    {
      name: 'Lexus ES 350',
      type: 'Luxury',
      price: '45585.57',
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC60LEC161A021001.jpg'
    },
    {
      name: 'GMC 3500',
      type: 'Pickup Truck',
      price: '20556.84',
      imageUrl:
        'https://www.gmc.com/content/dam/gmc/na/us/english/index/shared-assets/jellybeans/2019/sierra/sierra-hd/sierra-2500/2019-sierra-2500-dark-slate-metallic.jpg?imwidth=600'
    },
    {
      name: 'Dodge Dakota',
      type: 'Pickup Truck',
      price: '22630.25',
      imageUrl:
        'https://media.ed.edmunds-media.com/dodge/dakota/2003/oem/2003_dodge_dakota_crew-cab-pickup_sport-plus_fq_oem_1_500.jpg'
    },
    {
      name: 'Ford Mustang',
      type: 'Muscle',
      price: '24386.94',
      imageUrl:
        'https://s.aolcdn.com/commerce/autodata/images/USC50FOC051B021001.jpg'
    },
    {
      name: 'Mercury Grand Marquis',
      type: 'Luxury',
      price: '27235.79',
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/90MEGED1.jpg'
    },
    {
      name: 'Audi a3',
      type: 'Sedan',
      price: '35006.47',
      imageUrl:
        'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q3/685270/2017-audi-a3-20t-quattro-test-review-car-and-driver-photo-686688-s-original.jpg'
    },
    {
      name: 'Volkswagen Passat',
      type: 'Station Wagon',
      price: '22598.57',
      imageUrl:
        'http://consumerguide.com/wp-content/uploads/2014/07/95606131990101.jpg'
    }
  ]

  const users = await Promise.all(
    fakeUsers.map(eachUser => {
      return User.create(eachUser)
    })
  )

  const products = await Promise.all(
    fakeProducts.map(eachProduct => {
      return Product.create(eachProduct)
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
