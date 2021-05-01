/*  
 let element  = document.createElement('h2');
 

 let element2 = document.createTextNode('Hello test data');
 console.log(element2)

 element.appendChild(element2)

 console.log(element)

 let phead = document.getElementById('test');
 phead.appendChild(element)
  */
/* 
 let li  = document.createElement('li'); 
 let liText = document.createTextNode('Test Language');
 li.appendChild(liText)

 let lang = document.getElementById('language');
 //console.log(lang)
 //lang.appendChild(li)
 console.log(lang.childNodes[0], lang.children[0])
 lang.insertBefore(li,lang.childNodes[0])
 */

 let lang = document.getElementById('language');
 let liHtml = '<li>Mongo + Node </li>';

 lang.insertAdjacentText('afterbegin',liHtml)
 /* lang.insertAdjacentHTML('afterbegin',liHtml) */

 //------ remove -----//
 let li  = document.createElement('li'); 
 let liText = document.createTextNode('Testsssss Language');
 li.appendChild(liText)

 lang.replaceChild(li,lang.childNodes[0])

 lang.removeChild(lang.childNodes[2])