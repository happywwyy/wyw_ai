// 函数对象
function add(a, b, c) {
  // arguments 函数运行时，参数总管
  // 下标访问第几个参数 数组
  // console.log(arguments, arguments.length, Object.prototype.toString.call(arguments), '//////')
  // 类数组， 有length 属性，for ，但是没有数组太多的方法
  console.log(arguments.map(item => item + 1)) // 函数的参数个数
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]) //类数组对象
    result += arguments[i]
  }
  return rusult
  // return a + b + c;
}
console.log(add.length) 
console.log(add(1, 2, 3))