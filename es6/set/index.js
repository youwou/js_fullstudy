//set类似于数组但是不一样的地方是set这种数据结构数组内的成员是唯一值


// const s = new Set()//类数组
// //const arr = Array()
// let arr = [2,3,4,5,6,5,3,1]
    // for (let i = 0; i < arr.length; i++){
    //     console.log(arr[i])
    // }
    
    // for (let item of arr){
    //     console.log(item)
    // }

    // arr.forEach((x) => {  //  () => {} == function(){}
        ///console.log(x)


    //     s.add(x)
    // })
    // console.log(s)



    // const set = new Set([1,2,3,3,4])
    // console.log(set.size)

// //数组去重
//  let arr = [2,3,4,5,6,5,3,1]
// // // console.log([...new Set(arr)])
// // console.log(arr)
// console.log(arr.indexOf(3))


//字符串去重
// console.log([...new Set('ababab')])


const i = new Set()
// i.add(5)
// i.add('5')


// i.add({})
// i.add({})

// i.add({name:'dada'})
// i.add({name:'dad'})



// console.log(i)
// i.add(1)
// i.add(2)
// i.add(3)

// i.add(1).add(2).add(3)
// i.delete(2)
// console.log(i)
const set = new Set([1,2,2,3,4])
const array = Array.from(set)
console.log(array)