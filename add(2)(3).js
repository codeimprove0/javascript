
function add(){
    var args = [...arguments]   
    console.log(args)
    function addReturn(){ 
        var args1 = [...arguments] 
        return add(...args,...args1)
    }
    let total = args.reduce((total,value)=> total + value) 
    addReturn.value = total; 
    return addReturn;
}


let data = add(2)(3)(5) //add(2,3);
console.log(data)
/* console.log(add(1)(2)(3))
console.log(add(1)(2)(2).value)
console.log(add(1,2,3)(1,2)(3).value) */
 
 