// 声明了一个对象常量
// 内存之中开辟了一个空间，存储了一个对象
// 这个对象的引用地址，赋值给了hxt这个变量 变量名是地址的标记
// js是一个弱类型语言 变量的类型由值决定的 
// = 赋值 Object
// 对象字面量（字面意义上） JSON
// JS 太灵活，不需要new，通过{} 拿到对象，[] 拿到数组，() 拿到函数
const hxt = {
  name: '黄新天',
  age: 20,
  tall: 187,
  hometown: '山东临沂',
  isSingle: true,
};
// js 灵活
const pyc = {
  name: '彭奕淳', // key value String
  age: 21, // Number 数值类型
  hometown: '新余',
  isSingle: true, // Boolean 布尔类型
  // 送花
  // 形参
  sendFlower: function (girl) { // function 函数类型
    console.log('姜烁' + '给' + '可可' + '送了99朵玫瑰')
    // girl.reseiveFlower(pyc)
  }
}

const xm = {
  name: '小美',
  xq: 30, //心情
  reseiveFlower: function (sender) {
    console.log('可可' + '收到了' + '姜烁' + '的99朵玫瑰')
    if (xm.xq > 90) { // 心情
      console.log('一起约会吧~~~')
    } else {
      console.log('gun~~~')
    }
  }
}

// 帮彭老板的 小美的闺蜜
const xh = {
  room: '408',
  name: '小红',
  hometown: '新余', //老乡
  // 送小美，送小红，都具有reseiveFlower方法
  // 对象互换
  // 接口 interface
  reseiveFlower: function (sender) {
    // if (sender.name === '彭奕淳') { // 彭奕淳
    //   console.log('彭哥哥，让我们在一起吧')
    //   return; // 结束
    // }
    setTimeout(() => {
      xm.xq = 99
      xm.reseiveFlower(sender)
    }, 3000)

    // xm.reseiveFlower(sender)
  }
}

pyc.xq = 99;

pyc.sendFlower(xm)
xh.reseiveFlower(pyc)
// pyc.sendFlower(xm)