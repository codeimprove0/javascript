 /// Spread Operator & Rest Parameter
// ... three dot

let userInfo = {
    firstName:'Code Improve',
    batch:2021
}
/* 
let userOther = {
    department:'Tech'
} */

//let finalObj = Object.assign(userInfo,{ department:'Tech'});
/* 
let finalObj = { 
    department:'Tech',
    ...userInfo,
}
console.log(finalObj) */

let arr1 = [12,14];
 
//let arr2 = [24,28];
/* 
let finalArr = arr1.concat([24,28]);

console.log(finalArr)
 */

/* let finalArr = [ 24,...arr1,28];

console.log(finalArr) */

function results(m1,eng,...marks){
    let total = 0;
    console.log(m1,eng,marks)
    for(let i=0;i<marks.length;i++){
        total += marks[i];
    }
    console.log(total)

}


results(90,95,65,75,88);













