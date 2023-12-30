//Array
const myArray=[0,1,2,3,4,5,6,];
console.log(myArray[0]);
console.log(myArray[5]);

const myHeroes=["Hritik","Shaktiman"]


//Array Methods
myArray.push(7)
console.log(myArray);
myArray.push(8,9);
console.log(myArray);
myArray.pop()
console.log(myArray)

myArray.unshift(10)//it allocate in 0th index and all the value shifted one-by one it takes lotes times consuming
console.log(myArray);
myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));

console.log(myArray.includes(5));
console.log(myArray.indexOf(6));

const newArr=myArray.join()
console.log(myArray)
console.log(newArr)
console.log(typeof newArr);

//slice,splice   important portion
console.log("A",myArray);
const myn1=myArray.slice(1,3);
console.log(myn1);

console.log("B",myArray)

const myn2=myArray.splice(1,3);
console.log("C",myArray)


console.log(myn2)

// console.log("c",myArray);
// const myn3=myArray.splice(1,3)
// console.log(myn3);

