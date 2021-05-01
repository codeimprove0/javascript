 
 // events & event listner

 function getAlert(){
     alert('hello code improve')
 }

 function inputFn(obj){
     console.log(obj.value)
 }

/*  function homeAlert(){
     alert("yes called")
 }
 document.addEventListener('click',homeAlert) */


/* document.addEventListener('click', function homeAlert(){
    alert("yes called")
}) */


document.getElementById('heading').addEventListener('click',function headingFn(){
    alert('heading alert')
})

document.getElementById('submit').addEventListener('click',function headingFn(event){

    alert('submit alert');
    event.preventDefault();
})