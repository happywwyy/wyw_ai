/**
 * @func 反转字符串
 * @param {string} str
 * @returns string
 */
function reverseString(str) {
  // str 是什么类型？ 字符串 简单数据类型 primitive

  return str.split('').reverse().join('')
}
// 函数表达式
// es5 函数表达式
const reverseString1 = function (str) {
  return str.split('').reverse().join('')
}
// es6 箭头函数 简洁 不要function 用箭头代替
// {} 也省了 只有一句话的时候
// 他是返回值的时候 连return 都可以省略
// 
const reverseString2 = str => str.split('').reverse().join('')
console.log(reverseString2('hello'))