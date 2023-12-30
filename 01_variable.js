const accountId=45256;
let accountEmail="sonu89033@gmail.com";
var accountCity="Jaipur";
 let accountName;            // it provides undefined output.
collegeName="bhu"; 

//accountId=154; // constant changed not alowed.

accountCity="jharkhand";
accountEmail="sonu@452gmail.com";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(collegeName);

console.table([accountCity,accountEmail,accountId,accountName]);