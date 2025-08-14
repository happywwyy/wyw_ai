const s = Symbol('id') // 独一无二
const source = {
  [s]: 123,
  a: 1
}
const target = []
Object.assign(target, source)

console.log(target) // [ a: 1, [Symbol(id)]: 123 ]