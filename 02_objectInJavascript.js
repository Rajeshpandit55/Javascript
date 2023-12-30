
// both delatation are same
const tinderUser=new Object()   // singleton object
const tinderName={} // non singleton Object
console.log(tinderUser);
console.log(tinderName);

tinderUser.id="12345"
tinderUser.name="Rajesh Raj"
tinderUser.isLoggedIn=false

const regularUser={
    email:"sonu@gmail.com",
    ph:80002325664,
    fullName:{
        userFullName:{
            firstName:"Rajesh",
            lastName:"Pandit",
        }
    }
}

