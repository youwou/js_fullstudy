// let obj = {
//     name:'滴滴',
//     age:18,
//     sex:'man',
    
// }
// obj.height = '175cm'//往对象里存数据

// const m = new Map()
// //console.log(m)
// m.set(obj,'content')//往map里添加数据set
// // console.log(m.get(obj))

// m.delete(obj)//删除用delete
// // console.log(m.has(obj))


// const map = new Map([
//     ['name','我'],
//     ['age','20']
// ])
// console.log(map.size)
// console.log(map.has('name'))
// console.log(map.get('name'))


// const item = [
//     ['mane','我'],
//     ['age','20']
// ]
// const map = new Map()
// item.forEach(([key,value]))



// )const set = new Set([
//     ['foo',1],
//     ['bar',2]
// ])
// const m1 = new  Map(set)
// console.log(m1)

 const a = new Map()
// const k1 = ['a']
// const k2 = ['b']

// a.set(k1 , 111).set(k2 , 222)
// console.log(a)


// a.set(NaN,5)//  Nan 默认就是一个键
// a.set(NaN,6)
// // console.log(a)
// a.clear()//清空
// console.log(a)



const map = new Map([
    ['foo','no'],
    ['bar','yes']
])
//key() 返回键名的遍历器
//
for(let key of map.keys()){
// console.log(key)
}
for (let key of map.values()){
    // console.log(key)
}

// map.forEach((e) => {
//     console.log(e)
// })

let k = [...map.keys()]
let val = [...map.values()]
let m1 = [...map.entries()]
console.log(m1)
