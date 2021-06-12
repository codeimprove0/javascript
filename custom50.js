
/* 
Computed Property

ES6 allows you to use an expression in brackets []
*/ 

let type = 'dept'
let obj = {
    name:'Code',
    last:'Improve',
    [type]:'this is computed value',
    first_name : 'Codes',
    first_email:'email@gmail.com'
}

console.log(obj.name)

console.log(obj[type])

let firstType = 'name'

console.log(obj['first_'+firstType])

console.clear()

class Person{
    constructor(name){
        this.name = name
    }
    get[type](){
        return this.name
    }
}

let person =  new Person("Code Improve")

console.log(person.dept)