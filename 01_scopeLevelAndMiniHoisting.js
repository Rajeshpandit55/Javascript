function one(){
    const username="RajeshPandit"

    function two(){
        const website ="Youtube"
        console.log(username)
    }
    //console.log(website);
     
    two();
}
one() 

if(true){
    const username="Sonu"
    if(username==="Sonu"){
        const website ="Youtube"
        console.log(username +" "+""+ website);
    }
    //console.log(website);     // not accessible 
}
//console.log(username);        // not accessible


//+++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++

console.log(addOne(5))  // here correct declearation
function addOne(num){
    return num+1
}


//addTwo(8)           // wrong decleration
const addTwo=function(num){
    return num+2
}
