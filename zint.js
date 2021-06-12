

https://ishwar-rimal.medium.com/trickiest-javascript-interview-question-with-solution-73958f99a376

/* 
function add(a,b){ 

    return (b)=>{
        return a+b;
    }   
} */

function curring(a,b){  

    return (b)=>{
        return adds(a,b);
    }   
}

function adds(a,b){
    return a+b; 
}

///add(2,2)
/* 
let data = adds(2)(1) //add(2)(1)(4)  //add(1)(2)

console.log(data) */



function add(){
    const a = 12;
} 
console.log(a)