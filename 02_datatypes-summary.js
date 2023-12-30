// primitive datatypes

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
let score=254;
const scoreTemp =425.025;
const isloggedIn = false;
const outsideTemp=null
let userEmail;
console.log(typeof userEmail)
console.log(typeof score)

console.log(typeof scoreTemp)

const id = Symbol("25426");
const anotherId =Symbol("25426");
console.log(id===anotherId) 

console.log(typeof anotherId);


const bignumber =252556632552n
console.log(typeof bignumber);




// Reference Type/(Non Primitive)

// Array,Objects,Functions 

const heros = ["spiderman","Doga","shaktimaan"];
 let myObj={
    name:"Rajesh",
    age:22, 
}   

console.log(typeof heros); 

const myFunction= function(){
    console.log("hellllo panditji");
}
console.log(typeof myFunction)