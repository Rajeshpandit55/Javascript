//for loop

for (let index = 1; index<=10; index++) {
    const element = index*19 ;
    console.log(element);
    
}
 
for(let i=0; i<=10;i++){
    const element=i;
    if(element==5){
        console.log("quick get dsa ranking in leetcode 5 Star");
    }
    console.log(element);
}
console.log("+++++++++++++++++++++++++++++");

let mul=0;

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
      console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArray=["sohan","mohan","Ramu","Shamu"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of index is ${index}`);
    
}
// continue
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log(`detected 5`);
       continue;
    }
    console.log(`value of index is ${index}`);
    
}