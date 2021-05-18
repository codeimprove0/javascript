
/* 
Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects).
predictable and without side-effects
side effect - dont modify any variable */

 

var x = 10;

function add(x){
    console.log(x+1)
    return x+1;
}

add(10);

add(10);
add(12);
add(20);
/* function add(){
    console.log(x);
    x++;
}

add(); 
add(); 
add(); 
add(); */