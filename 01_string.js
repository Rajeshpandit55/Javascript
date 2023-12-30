const name="RajeshPandit";
const repoCount=50;
console.log(name+repoCount+" "+"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}  `)

const gameName= new String('RajeshRaj-monu-Aman');

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName._proto_);

console.log(gameName.toUpperCase())

console.log(gameName.toLowerCase())

console.log(gameName.charAt(5));

console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,5);
 
console.log(newString);

const anotherString=gameName.slice(-8,6)
console.log(anotherString);

const newStringOne="    RajeshPandit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://Rajesh.com/rajesh%20choudry"

console.log(url);
console.log(url.replace('%20','-'))

console.log(url.includes('Rajesh'))

console.log(url.includes('Monu'));

console.log(gameName.split('-'));






 