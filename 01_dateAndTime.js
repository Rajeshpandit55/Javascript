// Dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);
console.log(myDate.toISOString());

let myCreatedDate=new Date(2023,0,23)
let myCreatedDate1=new Date("01-14-2023");
let myCreatedDate2=new Date("2023-02-14");

console.log(myCreatedDate.toDateString())

console.log(myCreatedDate1.toDateString())

console.log(myCreatedDate2.toDateString())

 
let myCreatedDateTime=new Date(2023,5,25,4,25);
console.log(myCreatedDateTime.toLocaleString())

let myTimeStamp=Date.now();
console.log(myTimeStamp)
console.log(myCreatedDateTime.getTime());
console.log(Date.now())
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // manditory use
console.log(newDate.getDay());
console.log(newDate.getFullYear());
 
newDate.toLocaleString('default',{
    weekday:"long",
    
})