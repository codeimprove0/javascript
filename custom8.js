

let x = [1,2,33,44,55];

/* x.forEach((value,index,array)=>{ 
    console.log(value+'==='+index,array)
}) */

  

/* let newX =  x.map((value,index)=>{
        console.log(value+'==='+index)

        return value+100;
})

console.log(newX) */

/* let newX =  x.filter((value,index,array)=>{

    return value > 33;

})

console.log(newX) */

let newX =  x.reduce((total,value,index,array)=>{
    console.log(total,value,index,array)
    return total + value;

})


console.log(newX)



/* function testFn(id){
    console.log("yes called")
}
 */

/* var testFn = (id) =>{
    console.log('arrow fn called :-'+id)
}
testFn(12); */