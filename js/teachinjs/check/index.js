// //正则的定义
// let patt1 = new RegExp("hello")
// let patt2 = /word/
// //正则的使用 test()
// let pat = /my/  //正则表达式两种方式：由两条斜杆框起来的，new RegExp("hello")
// let str = "this is my code...."
// // let arr = str.split(' ')
// // console.log(arr)


// console.log(pat.test(str))


// let pat = /hello/
// let msg = 'oh hello'
// console.log(pat.exec(msg))
  
//正则表达式的类型
// /pattren/attributea/ g  i 全局匹配 区分大小写匹配


//不区分大小写
// let str = 'visit NanChang'
// let pat = /nanChang/i
// let pat2 = /NanChang/gi
// console.log(pat2.test(str))

//字符串的正则
// let str = 'visit daXie'
// console.log(str.search(/daXie/))//search 是字符串查找

// let str = '1 good 2 bad 33'
// console.log(str.match(/\d+/g))


// let str = 'holle gg! oh i am man'
// // console.log(str.replace(/gg/,"mm"))

// console.log(str.split(/\s+/))


//正则写法
// //[abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[all] /
// console.log(str.match(pat))

//[^abc]查找任何不在方括号之间的字符
// let str = "hello aa mm ss"
// let pat = /[^aa]/g
// console.log(str.match(pat))

// let str = 'hello daDa how are you'
// let pat = /hello|you/g
// console.log(str.match(pat))

// let str = "Today is  hot : 100%"
// // let pat = /h.t/g
// let pat = /\w/g
// console.log(str.match(pat))

// let str = 'moon'
// let pat = /\b/g
// console.log(str.match(pat))

// let str = 'hhello jkj hello  ssff'
// let pat = /h?/g
// console.log(str.match(pat))


//手机号正则
let tel = '17826864511'
let pat = /^1([3-9])\d{9}/
console.log(pat.test(tel))


