/* (function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
 */
const a = {}
a = 10

console.log(a)




const arr = ["a", "b", "a", "c", "d"]

let obj = {}

for(let i=0; i <arr.length;i++){

    obj[arr[i]] = (obj[arr[i]]) ? obj[arr[i]] +  1; 
}
