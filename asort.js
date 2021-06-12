

 function bubbleSort(arr){
    

    for(let i = arr.length;i>0;i--){ 
        var flag = true;
        for(let j=0;j< i-1;j++){ 
            console.log(arr,arr[i],'==',arr[j])
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = false;
            }
        }
        if(flag) break;
        console.log('ONE PASS COMPLETE')
    }
    return arr;
   
 }
/* 
 let data = bubbleSort([51,37,29,8,45,41])

 console.log(data) */



 function selectionSort(arr){
     for(let i =0;i <arr.length;i++){
         var lowest  =  i; 
         for(let j = i+1;j< arr.length;j++){ 
             console.log(arr[lowest],arr[j],arr)
             if(arr[j] < arr[lowest]){
                lowest = j;
             } 
         }  
        if(i != lowest){
            var temp  = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;  
        }
        
     }
     return arr;
 }



 function insertionSort(arr){
    for(let i =1; i< arr.length;i++){
        let currentVal = arr[i];
      //  console.log(arr)
        for(var j = i -1; j>=0 && arr[j] > currentVal; j-- ){
            console.log(arr[j],arr,j)
            arr[j+1] = arr[j];
        }
       // console.log(j)
        arr[j+1] = currentVal;
        //console.log(arr)
        //console.log(arr)
    }
    return arr; 
 }

/*  let data = insertionSort([51,37,29,8,45,41])

 console.log(data) 
 */



 function merge(arr1,arr2){
     let results = [];
     let i = 0;
     let j = 0;
     while(i< arr1.length && j < arr2.length){ 
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++;
        }else{
            results.push(arr2[j])
            j++;
        }
     } 
     while(i < arr1.length){
         results.push(arr1[i])
         i++
     }
     while(j < arr2.length){
        results.push(arr2[j])
        j++
    } 
    return results
 }

 //let data1 =  merge([1,10,50],[2,14,99,100])

 
 function mergeSort(arr){
   
    if(arr.length <=1) return arr;
   
    let mid =  Math.floor(arr.length/2);
    console.log(mid,arr.slice(0,mid),arr.slice(mid))
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right)
 }


let data = mergeSort([34,24,86,73,50])

console.log(data)








