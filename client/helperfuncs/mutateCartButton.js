import {_offlineCartFunctions, _onlineCartFunctions} from './CartFunctions'

export const _mutateCartButton = (
  userId,
  product,
  functions,
  cart,
  identifier,
  reRender
) => {
  let newProduct = Object.assign({}, product)
  let compFunc
  if (identifier) {
    compFunc = identifier === 'add' ? (a, b) => a + b : (a, b) => a - b
  }

  userId
    ? _onlineCartFunctions(
        functions,
        cart,
        compFunc,
        product,
        userId,
        identifier
      )
    : _offlineCartFunctions(newProduct, compFunc, identifier)
  reRender()
}
