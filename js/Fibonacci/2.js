// 如何用闭包优化fibonacci
// 记忆功能
function memorizenFib() {
  // 闭包 1.函数嵌套函数
  // 自由变量
  const cache = {} // 存储
  return function fib(n) {
    if (n <= 1) return n // 退出条件
    if (cache[n]) return cache[n] // 重复计算
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n] 
  }
}

// 2.内部函数可以在外部访问自由变量
const fib = memorizenFib()
console.log(fib(1000))