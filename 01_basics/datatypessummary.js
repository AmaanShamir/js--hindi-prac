// primitive 
// 7 types : string ' number , Boolean , null , undefined , symbol makes value unique , BIg int 
// reference type s non primitiv 
// array , Objects , functions  retuns func
const id = Symbol('123')
const anotherid = id
console.log(id===anotherid)//  not equal
const bignumber = 3453456675433456123534n //for usin bigint 
const heros = [ " pappu ", "raju ", " bheem "]
let myobj={  name : " amaan",
    age: 19,


}// obj 
const myfunc = function (){
    console.log("hello world ");// use semicolon inside func 
}
//++++++++++++++=""
//stack (primitive )copy , heap(non primitive) oriinal refersence 
let myname = " aamnyata"
let user1={
    email: " assddfhxcn.com",
    upi: " rwets"
}
let user2= user1
user2.email= "qweqertr" // for access 
console.log(user1.email)
console.log(user2.email)
