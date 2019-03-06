export const _getProductType = arr => {
  let finalArr = []
  arr.filter((val, i, self) => !self.includes(val.type)).forEach(val => {
    let obj = {}
    obj.key = val.type
    obj.text = val.type
    obj.value = val.type
    finalArr.push(obj)
  })
  return finalArr
}
