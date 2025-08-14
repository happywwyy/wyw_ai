const arr = [1, 2, 3]
const newArr = [...arr]

let arr2 = arr.slice()
arr2[1] = 'b'
console.log(arr2, arr) 
// 输出：[ 1, 'b', 3 ] [ 1, 2, 3 ]

const arr3 = [[1, 2], [3, 4], [5, [6, 7]]]
let arr4 = arr3.slice()
arr4[2][1][1] = 8
console.log(arr4, arr3) 
// 输出：[ [ 1, 2 ], [ 3, 4 ], [ 5, [ 6, 8 ] ] ] [ [ 1, 2 ], [ 3, 4 ], [ 5, [ 6, 8 ] ] ]
let arr5 = arr3.concat() // 浅拷贝
console.log(arr5)
// 输出：[ [ 1, 2 ], [ 3, 4 ], [ 5, [ 6, 8 ] ] ]