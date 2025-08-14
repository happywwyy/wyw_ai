const target = {
  a: 1
}
const source = {
  // 对象的嵌套
  b: {
    name: '小明',
    hobbies: ['篮球', '羽毛球']
  },
  c: 1
}
// // 浅拷贝
// Object.assign(target, source)

// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source))
console.log(newObj) // { b: { name: '小明', hobbies: [ '篮球', '羽毛球' ] }, c: 1 }
newObj.b.name = '小军'
newObj.c = 2
console.log(newObj) // { b: { name: '小军', hobbies: [ '篮球', '羽毛球' ] }, c: 2 }
console.log(source) // { b: { name: '小明', hobbies: [ '篮球', '羽毛球' ] }, c: 1 }