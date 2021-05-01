
/* try{
    let x = 11; 
    if(x==10) throw "Not Valid"
    console.log(x)
}catch(err){
    console.log('catch called:--',err)
}

finally{
    console.log('m called')
} */

var car = 'Maruti'

function myFn(){
  
    console.log(car)
}

function myFn2(){ 
    console.log(car+'==')
}
myFn();
myFn2();