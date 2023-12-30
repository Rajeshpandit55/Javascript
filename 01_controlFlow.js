 const temperature=100;
 if(temperature>=100){
    console.log("you ill be burn")
 }else{
    console.log("you will not but dont worry");
 }

 const userLoggedIn=true
 const debitCard=true
 const loggedInFromGoogle=false
 const loggedInFromEmail=true

 if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");
 }
 if(userLoggedIn || loggedInFromEmail){
    console.log("User logged in")
 }


 // switch()  syntax

//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }

const month =3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        //  break;
    case 4:
        console.log("April");
         break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");  
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Jaugust");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;

    default:
        console.log("default case match");
        break;
}


const userEmail="Rajesh@.mail"
if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user Email");
}

const userName="      "

if (userName.length===0){
    console.log("Array is Empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
 

// Nullish Coalescing Operator (??): null Undefined

let val1;
// val1=5??10;
// val1=null??10
// val1= undefined??null
val1 = null??undefined??10??15
console.log(val1);


// ternary Operator

//Condition ? true : false

const icePrice=100;
icePrice>=80 ? console.log(`the price of icecreame is ${icePrice}`):console.log(`the price of iceCream is ${icePrice}`);
