// Singleton 
//Object.create

// object Literals

const mySym=Symbol("key1")

const user={
 name:"Rajesh",
 fullName:"Rajesh Pandit",
 [mySym]:"Bittu",
 age:22,
 location:"Mumbai",
 email:"Rajesh@google.com",
 isLoggedIn:false,
 lastliginDays:["Monday","Friday"]

}
console.log(user.location);
console.log(user["location"])
console.log(user["fullName"]);

console.log(user.mySym);
console.log(typeof user[mySym]);
console.log(user[mySym]);

user.email="sonuraj89033@gmail.com"
Object.freeze(user)

user.email="rk2815458@gmail.com"
console.log(user.email);
//console.log(user); 



// code not running properly try to use mdn for this
user.greeting=function(){
    console.log("Hello Javascript User");
}
console.log(user.greeting);

user.greetingnext=function(){
    console.log(`Hello Javascript User,${this.name}`);
}
console.log(user.greetingnext());
