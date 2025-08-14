const target = {
  a: 1,
  b: 2
}
const source = {
  c: 3,
  d: 4
}
// 后来居上
const result = Object.assign(target, source)
console.log(target) // {a: 1, b: 2, c: 3, d: 4}
console.log(source) // {c: 3, d: 4}
console.log(result === target) // true