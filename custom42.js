 
/* Map() : If you use map then map can return new array by iterating main array.

Foreach() : If you use Foreach then it can not return anything for each can iterating main array. */
 

let arr = [10,20,30,40,50];
  console.log(arr)
/* arr.forEach((item,index,array)=>{
    console.log(item+'=='+index+'==='+array)
    arr[index] = item + 2;
})
console.log(arr)
 */

let newArray = arr.forEach((item,index,array)=>{
    //console.log(item+'=='+index+'=========='+array)
    arr[index] = item + 2;
    return arr[index];
})
console.log(arr)
console.log(newArray)
