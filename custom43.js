
let arr = [12,12,13,14,17,18,18,'a','a','b'];

console.log(arr)
//let newArr =  [];
/* 
for(let i=0;i<arr.length;i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
}
 console.log(newArr) */

/*  let newArr = arr.filter((item,index,array)=>{
    console.log(item,'====',index,'=======',array.indexOf(item))
    return array.indexOf(item) === index;
 })

 console.log(newArr)
 */

 let newArr =  new Set(arr)

 console.log(newArr)


 console.log(Array.from(newArr))