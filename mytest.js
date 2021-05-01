/*

1) Reconciliation in react 
:- Reconciliation is the process through which React updates the DOM. When a component's state changes, React has to calculate if it is necessary to update the DOM.    
2) props render 
:- The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function
3)  map,filter,reduce
4) buffer in node
5) heap algo
6)  Hoisting
7) event loopin
8) single thread vs multiple thread
9) event emitter
10 apply method in js
11) apply method vs callback
12) type of middleware in express:- 5 type
    Application-level middleware.
    Router-level middleware.
    Error-handling middleware.
    Built-in middleware.
    Third-party middleware.
    

13) sharding vs replica in mongo
14) lookup
https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/  
15) populate vs aggregate    

16) why we use state instead to variable  in react
While instantiating a state object might look like the previous example using a class variable, state is a protected keyword in React that refers to stored component data. ... Instead of manually reassigning the variable, you call this.


17) non blocking vs asynchronous
18) authentication vs authorization
18) key in react:- The key prop is a mechanism for controlling component instances.

19) 
----------------------------------------------------
for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
let a = []
let b = [];

console.log(a,b)
    if(a===b) console.log('meee') 

 
-----------------------------------------------------    
20) console.log(1<2<1)
21) 

    let arr = [{name:'vishnu',age:27}] 
    let x = arr.map((item)=> item.name==='vishnu'); 
    let y = arr.filter((item)=> item.name==='vishnu');

    console.log(x,'====',y)

23)    
item.map((item)=>{
    
})

24) BEST EXAMPLE ########################
  var a= 10;

    function printTl(){
        console.log(a)
        if(a>=10){
           var a=12;
            console.log("hello "+a)
        }else{
            console.log('noo '+a)
        }
    }

    printTl();
    // output noo undefined


   25) 
   
   2) DOM NODE
events dom
2) local storage session storage
3) recurring
4) map vs forEach()
5) event driven
1) pipe 
2) seo title & meta
javascript single threaded
es6  
 2) function generator  
  4)  event looping  
 ----------------------

var itemArray = [2,3,4,
    [2,3,7,6,5,
        [3,3,6,7,5,3]
        ,3,7,5,4
        ],
        4,
        3
        ];

var finalArr = []
for(let i =0;i<itemArray.length;i++){

    if(typeof itemArray[i] ===  'array'){
         let data =    getArray(itemArray[i]);
        finalArr.concat(data)
    }else{
        finalArr.push(itemArray[i])
    } 
} 
function getArray(arr){
    var response = [] ;
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] ===  'array'){
           let data = getArray(arr[i]);
           response.concat(data)
        }else{
          response.push(arr[i]);
        }
    }
    return response; 
}

[ 2,3,4,2,3,7,6,5,3,3,6,7,5,3,,37,5,4,4,3 ]

