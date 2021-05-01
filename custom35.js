 
//The HTML DOM (Document Object Model)  

/* let a = window;
console.log(document) */

//document.write('<h2>Hello Code Improve</h2>');

let elm = document.getElementById('heading');
//console.log(elm.className)
//console.log(elm.innerHTML)
//console.log(elm.innerText)

//elm.innerHTML = '<h3>New Data</h3>';
elm.innerText = '<h3>New Data</h3>';

/* let elmCls = document.getElementsByClassName('domclr');
console.log(elmCls[0].innerText) */

let elmTag = document.getElementsByTagName('h1');
//console.log(elmTag[0].innerHTML)
elmTag[0].innerHTML = '<h1> HTML DOM Tutorial</h1>';
elmTag[0].style.color = 'red';


let doc2 = document.querySelector('#test')  //.classname , h1
console.log(doc2.innerHTML)

let data  = document.getElementsByTagName('li');
console.log(data);

let newData = Array.from(data);
console.log(newData)

newData.forEach((item,index)=>{ 
    let color = (index%2==0)?'red':'green';
    item.style.color = color;
})

let names = document.getElementById('firtName');
console.log(names.value)