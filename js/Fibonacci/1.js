// 递归
// 相似问题
// 自顶向下的思考 问题的终点
// 退出条件
// 重复计算
// 树状结构
//              fib(10)
//            /          \
//        fib(9)        fib(8)
//        /     \        /    \
//    fib(8) fib(7)  fib(7) fib(6)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
  console.log(fib(10));
}