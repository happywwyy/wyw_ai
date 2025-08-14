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
// 浅拷贝
Object.assign(target, source)
target.b.name = '小红'
target.b.hobbies.push('画画')
target.c = 2

console.log(source.b.name, source.b.hobbies, source.c) // 小红 [ '篮球', '羽毛球', '画画' ] 1