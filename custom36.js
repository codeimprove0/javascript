 
/*  let data = document.getElementsByClassName('row');
 console.log(data) */

 let data = document.querySelector('.row');
 //console.log(data.childNodes) 

// console.log(data.children[1])

//console.log(data.children[1].children)

console.log(data.children[1].firstElementChild)
console.log(data.children[1].lastElementChild)

console.log(data.children[1].parentNode)

console.log(data.children[1].nextElementSibling)

let newData = data.children[1].parentNode.nextElementSibling
console.log(newData.children[0].firstElementChild)
