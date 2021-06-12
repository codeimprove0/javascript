function reverse(arr) {

    var lastvalue = arr[arr.length-1];  //4  
    var total =  arr.length;
    for(let i = total-1 ;i >0;i--){ 
        console.log(i, arr[i],arr[i-1])
        arr[i] = arr[i-1]; 
    }   
    arr[0] = lastvalue;
    return arr;
}

let dataa = reverse([12, 14, 16, 7])       /// 7  12 14 16
console.log(dataa);