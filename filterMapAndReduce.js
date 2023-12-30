
// use of Filter in javascript

const coding=["js","python","java","cpp"]

 const value = coding.forEach((item)=>{
    console.log(item);
    return item;
 })

//console.log(value);

 const myNum=[1,2,3,4,5,6,7,8];

 //const newNums=myNum.filter((num)=>num>4)


    const newNum=myNum.filter((num)=>{
        return num>4
})
 console.log(newNum); 

 const newNums=[]
 myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num);

    }
 })
 console.log(newNums);



 const books=[
 {title:'Book one',genre:'fition',publish:'1981',edition:'2004'},
 {title:'Book one',genre:'History',publish:'1981',edition:'2005'},
 {title:'Book one',genre:'History',publish:'1981',edition:'2006'},
 {title:'Book one',genre:'History',publish:'1981',edition:'2008'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2010'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2012'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2014'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2018'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2020'},
 {title:'Book one',genre:'fition',publish:'1981',edition:'2021'}
 ];
 let userBooks=books.filter((bk)=>bk.genre==='History')
   // userBooks=books.filter((bk)=>bk.edition>'2000')
    userBooks=books.filter((bk)=>{ return bk.edition>='2006' && bk.genre==="History"})

 console.log(userBooks);

// use of Map  
 let myNumbers=[1,2,3,4,5,6,7,8,9,10]
 //newNumber=myNumbers.map((num)=>num+10)
//console.log(newNumber);


 const newNum1=myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
 console.log(newNum1);

const sonu=myNumbers.forEach((item)=>{
   console.log(item);
   return item;
})
 console.log(sonu);

 // use of red uce method in javascript

 const myNum2=[1,2,3,4,5,6]
//  const myTotal=myNum2.reduce(function(accumulator,currentValue){
//     console.log(`Accumulator: ${accumulator} and currentValue:${currentValue}`);
//  return accumulator+currentValue;
//  }, 5 )

const myTotal=myNum2.reduce((acc,current)=> acc+current,10  )


 console.log(myNum2);
 
 console.log(myTotal);
   
 
const shoppingCart= [ 
    {
        itemName:"js Course",
        price:5999
    },  

    {
        itemName:"python",
        price:3999
    },
    {
        itemName:"Datastructure",
        price:5999
    },
    {
        itemName:"Android Devlopment",
        price:7999
    },
    {
        itemName:"Data scientist",
        price:6999
    },
]
const priceToPay=shoppingCart.reduce((accumulator,item)=>accumulator+item.price,0)    
console.log(priceToPay)
 
  
