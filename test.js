 
 var arr = [1,2,0,4,0,6,3,8];   // 1,2,0,0,4,0,0,6
 // 12
 // [1,2,0,0,4,0,0,6] 
 console.log(arr.length);
   for(var i=0;i<arr.length;i++){
/* 
    for(let j=1;j<arr.length-1;j++){

        if(arr[i]==arr[j+1]){   // 0 4

        }
    } */

    if(arr[i]!=0 && arr[i-1] == 0){  // 0 --  1,2 0 4 0
        let temp = arr[i];  
        arr[i] = arr[i+1];
        arr[i+1] = temp;  
    } 

 }  
 console.log(arr);

 contruc
 getS

 renerd 
 

