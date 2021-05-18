/* 

1) Arguments objects are not available in arrow functions,
2) Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable'
3)  arrow functions do not have their own this.
4) implicitly returned by the arrow function 
*/


/* function mask(){
    100;
} */

const mask = ()=> 100;
console.log(mask())


/* 
let userInfo = {
    name:'Code Improve',
    fullName(){
        const test = ()=>{
            console.log(this.name+'===')
        }
        test();
        console.log(this.name+' Normal function')
    },
    fullName2:()=>{
        console.log(this.name+' Arrow function')
    }
}
userInfo.fullName2()

 */






 
/* function Car(name){
    this.brand = name
} */

/* const Car = (name)=>{
    this.brand = name;
}
let carData = new Car('Maruti')
console.log(carData) */








/* function add(x,y){
    console.log(arguments)
    return x+y; 
} */
/* 
const add = (x,y)=>{
    console.log(arguments)
    return x+y; 
}

add(10,15); */