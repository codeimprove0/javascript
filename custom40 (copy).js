/* 
let data =  [50,100,20,60,1,16,4,17];

function custom(item){
    return item < 17;
}

let result = data.find(custom);
console.log(result) */


let data =  {

    name:'code improve',
    lists:[12,14,16,18],
    getInfo: function(){

        testCase = function(){
            console.log('called',this.name)
        }
        testCase.call(this)
       // testCase();
          
        /* (()=>{
            console.log(this.name);
            console.log('sssssss')
        })(); */
        console.log('yesss')
    }
}

data.getInfo();

var outerFunction  = function(){
 
    if(true){
       var x = 5;
       //console.log(y); //line 1, ReferenceError: y not defined
    }
  
    var nestedFunction = function() {
  
       if(true){
          var y = 7;
          console.log(x,'=='); //line 2, x will still be known prints 5
       }
  
       if(true){
          console.log(y,'=='); //line 3, prints 7
        }
    }
    return nestedFunction;
 }
  
 var myFunction = outerFunction();
 myFunction();