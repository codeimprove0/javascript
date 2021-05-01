
/// A callback is a function passed as an argument to another function. 



function hrCall(dept,cb){ 
    console.log(dept+' Hr called');
    setTimeout(()=>{
        cb();
     },2000) 
}

function hrDirector(){
    console.log('director')
}

hrCall('Tech',hrDirector);


 
/*  function hrCall(){
   
     setTimeout(()=>{
        console.log('Hr called');
     },2000)
 }
 
 function hrDirector(){
     console.log('director')
 }

 hrCall();
 hrDirector(); */
