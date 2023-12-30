 // shopping cart type 

 function calculateCartPrice(num1){                 // ...variavle :-> rest operator/spread operator
    
    return num1;
  }

  console.log(calculateCartPrice(220, 440,660))




  function calculateCartPrice1(...num1){                 // ...variavle :-> rest operator/spread operator
    
    return num1;
  }
  console.log(calculateCartPrice1(220, 440,660,880,990))



  function calculateCartPrice2(val1,val2,...num1){
    return num1;

  }
  console.log(calculateCartPrice2(100,200,300,400,500,600));



  function calculateCartPrice3(val1,val2,...num1){
    return val2;

  }
  console.log(calculateCartPrice3(100,200,300,400,500,600));

  const user={
    book:"gitanjali",
    price:5000
  }
  function handleObject(sonu){
    console.log(`book name is ${sonu.book} and price is ${sonu.price}`);
  }

handleObject({
 book :"C in depth",
 price:399
})
handleObject(user);



const myNewArray=[200,300,400,500,600]
function returnSecondValue(sonu){
    return sonu[3];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600,822]));
 