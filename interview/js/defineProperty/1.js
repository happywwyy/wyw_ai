//Object.defineProperty
var obj = {};//对象
//es5就提供的API 兼容性更好
//react vue最新版 对浏览器有要求
Object.defineProperty(obj,'num',{
    value:1,
    // 属性描述
    configurable:true,//是否可配置,精确设置这个属性的某些新行为,可不可以删除
    writable:false,//是否可写
    enumerable:true,//是否可枚举

    // get:function(){
    //     console.log('读取了属性')
    //     return 1
    // }
})
//obj.num = 2;
// console.log(obj.num)
// delete obj.num;
// console.log(obj.num)
// for(let key in obj){
//     console.log(key)
// }
// console.log(Object.getOwnPropertyDescriptor(obj,'num'))//不要去找原型链上的属性，要自己的属性
Object.defineProperty(obj,'name',{
    writable:true,
})
obj.name='a'
console.log(Object.getOwnPropertyDescriptor(obj,'name'))
