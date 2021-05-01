
/* var a = 12;
var c = 10;
var b = parseInt("13");

var z = a + c + b;
console.log(z) */

function getMarks(){ 

    let math = 80;
    return math;
} 

  let myMarks = getMarks();

///console.log(myMarks) 

 // camelCase
 /// kebab-case
 // PascalCase
const userInfo = {
    name:'Demo',
    uId:'117',

    'my name':'dummy',
    mathMark:function(){
        return '90';
    }
}

userInfo.name = 'Test Demo'

console.log(userInfo['my name'])


let mathMarks = userInfo.mathMark();

console.log(mathMarks)

