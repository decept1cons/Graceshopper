// /* global describe beforeEach it */

// const {expect} = require('chai')
// const db = require('../index')
// const Product = db.model('product')

// describe('Product model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('instanceMethods', () => {
//     describe('correctPassword', () => {
//       let sox

//       beforeEach(async () => {
//         sox = await Product.create({
//           name: 'sox',
//           type: 'clothing'
//         })
//       })

//       it('returns true if the password is correct', () => {
//         expect(sox.name('sox')).to.be.equal(true)
//       })
//     }) // end describe('correctPassword')
//   }) // end describe('instanceMethods')
// }) // end describe('User model')
