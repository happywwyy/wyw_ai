const obj = {a:1,b:2}
//太常用了，大型语言都内置，[]{}
//hashMap 字典 O(1)

const target = new Map();//实例化es6新的数据结构,强，新的数据类型Symbol,BigInt
target.set('c',3);//设置一个新的key，值为3
console.log(target.get('c'));//3
console.log(target.has('c'));//true
console.log(target.delete('c'));//true
console.log(target.has('c'));//false
target.set(obj,4)//Map可以把对象作为key,与JSON不一样的地方
console.log(target.get(obj));//4
obj = null
console.log(target.get(obj));


let obj2 = {name:'aa'}
const target2 = new WeakMap();//Weak 弱的  对象作为key引用的弱与强
target2.set(obj2,'bb')
console.log(target2.get(obj2));//bb
obj2 = null//内存的垃圾回收
console.log(target2.get(obj2));//undefined


