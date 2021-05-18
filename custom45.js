
/* 
Event Bubbling & Capturing & Propagtion
 
///event bubbling -----child--parent---upper parent   & reverse in capturing
*/  

let mainDiv = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.getElementById('node');

/* mainDiv.addEventListener('click',()=>{
    console.log('Main Div Called')
},false)


ul.addEventListener('click',()=>{
  //  event.stopPropagation();
    console.log('UL Called')
},false)
 */

li.addEventListener('click',(event)=>{ 
   // event.preventDefault()
    event.stopImmediatePropagation();
    console.log('LI Called')
})

li.addEventListener('click',(event)=>{ 
    console.log('LI Called 2')
})

li.addEventListener('click',(event)=>{ 
    console.log('LI Called 3')
})