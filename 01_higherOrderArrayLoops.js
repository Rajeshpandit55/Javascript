const number=[1,2,3,4,5]
for(const num of number){
    console.log(`Element of array are:-${num}`);
}

const greeting="Hello Sonu";
for(const greet of greeting){
    console.log(`Each character of greeting:-${greet}`)
}

// maps
const map= new Map()
     map.set('IN','India')
     map.set('Fr',"France")
     map.set('USA',"United state of America")
     map.set('IN',"India")
// map doest not print duplicate value
     console.log(map);

    for(const key of map){
        console.log(key);
     }

     for(const [key,value] of map){
        console.log(key,':-',value)
     }
/////////////////////////////////////////
     for(const key in map){
        console.log(key);
     }

     // not itteratiable for in loop in map
///////////////////////////////////////////

     


// // object pe for loop nhi lagta hai

    //  const myObject={
    //     game:'NFS',
    //     game1:'SpiderMan',
    //     game2:'Pubg'
    //  }
    //   for (const[ key, value] of myObject){
    //     console.log(myObject);
    //   }

    const myObject= {
        js:"javascript",
        cpp:"C++",
        rb:"ruby",
        swift:"Swift by apple"
    }
 
// for value of key
    for (const key in myObject){
        console.log(key);
    }

///  for value of object 

    for (const key in myObject){
        console.log(myObject[key]);
    }

    for(const key in myObject){
        console.log(`${key} shortcut is for ${myObject[key]}`); 
    }

    // does for in loop work in array

    const programming=['js','rb','cpp','swift','java','Ruby']
    for(const key in programming){
        console.log(key);
        
    }

    for(const key in programming){
        console.log(programming[key]);
    }
 
    const coding=['js','cpp','java','python','cpp']

    // coding.forEach(function(item){ 
    //     console.log(item);
    // })

    coding.forEach( (value) => {
        console.log(value);
    }) 

    function printMe(item){
        console.log(item);
    }
