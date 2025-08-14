const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [2,4,5]
}
console.log(JSON.parse(JSON.stringify(target)))
//通过递归+拷贝
//对数组支持不好
function clone (source){
    if(typeof source === 'object' ){
        let cloneTarget = {}//分配新空间
        for(const key in source){//遍历
            cloneTarget[key] = clone(source[key])
        }
        return cloneTarget
    }else{
        return source//简单数据类型直接返回

    }

}
let obj = clone(target)
// console.log(clone(target))
obj.field4.child2.child2 = 'aaaaa'
obj.field5[0] = 100

console.log(obj,target)

