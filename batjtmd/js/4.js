// 全局的 js 代码在执行之前会有一个编译过程
// 变量提升了
console.log(value,'----------');
if (false) {
    var value = 1; // 声明变量 // 赋值在执行阶段
}
// underfined 有
console.log(value);