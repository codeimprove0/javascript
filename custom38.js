// local storage  session  storage

/* localStorage.setItem('name','code improve');
localStorage.setItem('email','test@gmail.com');
let arr = [12,14,16,18];

localStorage.setItem('arrData',JSON.stringify(arr))
 */
//localStorage.removeItem('email')
//localStorage.clear()

let fullName = localStorage.getItem('name')
console.log(fullName)

let email = localStorage.getItem('email')
console.log(email)


let arrData = localStorage.getItem('arrData')
arrData = JSON.parse(arrData);
console.log(arrData) 
 
 

sessionStorage.setItem('ipID','121ASOP1212');
sessionStorage.setItem('ipID2','121ASOP1212'); 
/* 
sessionStorage.removeItem('ipID2')
 */

sessionStorage.clear()

let id1 = sessionStorage.getItem('ipID');
console.log(id1)
