/* 

when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function

*/  

/* 
function sum(x,y,z){
    return x+y+z;
}

console.log(sum(5,10,15)) */

/* function sum(x){
    return (y)=>{
        return (z)=>{
            return x + y +z
        }
    }
}  */
/* let data =  sum(5);
let data2 = data(10)
console.log(data2(15)) */
/* 
let data = sum(5)(10)(15)
console.log(data) */

let userObj = {

    name:'Code Improve',
    uId:11190
}

function info(obj){ 
    return (name)=>{
        return obj[name]
    } 
}

let data = info(userObj);
console.log(data('uId'))