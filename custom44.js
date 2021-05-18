
/* 
The splice() method returns the removed item(s) in an array 
slice() method returns the selected element(s) in an array, as a new array object.
*/

//         0   1  2  3
let arr = [12,14,16,18]
//         -4 -3 -2  -1 
 
//slice 

//let newArr = arr.slice(-3,2)  ///arr.slice(0,2)     // start,end

let newArr = arr.slice(-2)
console.log(newArr)
//splice

//arr.splice(1,2)   // start,end, addd

//arr.splice(-3,2)

/* let newArr = arr.splice(-3,1,100,200,300)
//console.log(newArr)
console.log(arr) */
 
 
/*  var a = [3,6,12,24];
 var b = ["3","6","12","24"];
 var c = "3,6,12,24";
 
 console.log(a==b)

 console.log(a==c)

 console.log(b==c)

  */

 const fs = require('fs');

 fs.writeFile('./file.txt', 'Hello World!!', function(){
     console.log('Wrote "Hello World!!" into file.txt');
 });
 
 console.log('Writing "Hello World!!" into file.txt');