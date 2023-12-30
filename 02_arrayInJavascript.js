//Array method

const marvelHeros=["thor","Ironman","Spiderman"];
const directHero=["superman","flash","Batman"]

marvelHeros.push(directHero);
console.log(marvelHeros)

console.log(marvelHeros[3][0]);
console.log(marvelHeros[2]);
console.log(marvelHeros[3][2]);

marvelHeros.concat(directHero)
console.log(marvelHeros);

const allHeros=marvelHeros.concat(directHero)
console.log(allHeros);


//Spread Operator
const allNewHeros=[...marvelHeros,...directHero]
console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,[5,6,8],6],[7,8,9]];
console.log(anotherArray)
const realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("RajeshPandit"));

console.log(Array.from("RajeshPandit"));

console.log(Array.from({name:"Rajesh"}))    // interesting for intreview

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))




