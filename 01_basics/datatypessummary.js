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


