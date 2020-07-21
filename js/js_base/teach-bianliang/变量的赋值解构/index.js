// let a = 1
// let b = 2
// let c = 3

// let [a,b,c] = [1,2,3]

// let [foo,[bar],baz] = [1,[2],3]

// let [ , , third] = [a,b,c]
// console.log(third)

// let [foo] = []2
// console.log (foo)


let {foo,bar}  = {foo:'aa',bar:'bbb'}
console.log(foo)

let {foo: baz} = {foo:'aaa', bar:'bbb'}
//foo 是
console.log(baz)
let obj = {
    name:'吃得好',
    desc: {
        alone: false,
        age:20,
        sanwei:[50,50,50]
    }
}
let (name, desc:{alone,age,sanwei[a,b,c]}) = obj;
console.log(name, desc:{alone,age,sanwei[a,b,c]}) = obj