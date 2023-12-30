let num=5;
let second=num;
for (let index = 0; index < num; index++) {
    for (let next = num; next > 0; next--) {
        if(index<=next) {
            console.log(next)
        }else{
            console.log("*")
        }
        
    }
    second--;
    
}

