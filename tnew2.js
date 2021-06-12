
function binary(arr,elem){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start+end)/2);  
    console.log(middle)
    while(arr[middle] != elem && start <= end){   
        console.log('start:-',start,'end:-',end,'middile:-',middle)
        if(elem < arr[middle]){
            end = middle - 1;
        }else{
            start = middle +1;
        }  
        console.log('start:-',start,'end:-',end)
        middle = Math.floor((start+end)/2);   
        console.log('start:-',start,'end:-',end,'middile:-',middle) 
    }
    return arr[middle] == elem? middle: -1;

}

/* let data = binary([2,5,6,7,12,33,44,55,66,77,87,88,99,180],88) 
//let data = binary([2,5,6,88,99,180],88)
console.log(data) */


function naviSearch(long,short){
    var count  = 0;
    for(var i=0;i <long.length;i++){
        for(let j=0;j<short.length;j++){
            console.log(short[j],'==',long[i+j])
            if(short[j] !== long[i+j]) break;
            if(j == short.length -1) count++;
        }
    }
    return count
}
let data =  naviSearch('te red t','red')
console.log(data)