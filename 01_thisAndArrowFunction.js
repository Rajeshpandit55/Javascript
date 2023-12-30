const user={
    username:"Rajesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username="Sonu"
user.welcomeMessage()

console.log(this);      // this refer empty  object

function chai(){
    console.log(this)
}
// console.log(this)
chai()

function chai1(){
    let username ="Rajesh"
   console.log(this.Username)
}
// console.log(this)
chai1()     // this refer undefined
  

const chai3=() =>{
    let username="Rajesh"
    console.log(this)
}
chai3()    // th is refer empty

const chai4=() =>{
    let username="Rajesh"
    console.log(this.username)
}
chai4()             //this refer undefied

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(5,8))

const addThree=(num1,num2,num3)=>num1+num2+num3;
console.log(addThree(5,8,6))

const obj=(num1,num2,num3)=>({Username:"Rajesh Pandit"});
console.log(obj(2,5,8))