

function sayMyName(){
console.log("R");
console.log("A");
console.log("J");
console.log("E");
console.log("s");
console.log("H");
}
sayMyName()

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
addTwoNumber(8,8);
addTwoNumber("7",8);
addTwoNumber(8,null);
addTwoNumber(8,"5");

const result=addTwoNumber(5,6) 
console.log("Result",result);

function addTwoNumber(number1,number2){ 
    //const sum=number1+number2
    //return sum
    return number1+number2
    console.log("chalo kana khaane");           // after return keyword no any line should be executed

}
const sum=addTwoNumber(5,6)
console.log("Result:-",sum);


function loginUserMessage(username="sam"){
    if(username===undefined){ 
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("sonu"))

// console.log(loginUserMessage(""))

 console.log(loginUserMessage())




