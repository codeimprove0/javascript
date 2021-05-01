
//Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. For example in the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2. 

arr = [16,17,24,3,5,17,12]  // [17,5,2]    24 7  24 17 12

let leaders = []; let maxLeader = 0;
 for(let k =0;k<=arr.length;k++){
     if(arr[k] >maxLeader  ){
         maxLeader = arr[k];
     } 
   }

let flag = false;
for(let i=0;i<arr.length;i++){ // 16
   if(flag == false && maxLeader == arr[i]){ 16 ==24
            flag = true;
            leaders.push(arr[i]);
            maxLeader = 0;
            for(let m = i;m<arr.length;m++){ 
                if(arr[m] >maxLeader  ){    // 24 -- 3 5 7  7 
                    maxLeader = arr[m];
                    flag = false;
                } 
            }
    }  
    for(let j=i+1;j<arr.length;j++){ // 5 >  3

      
        if(flag == true  &&  arr[j] && arr[j]>arr[i]){  // max =  17  > 16 
            leaders.push(arr[j])
        }
        // end
        if((i+1)==arr.length){
            leaders.push(arr[i])
        }
    }
}

 1 +  2 + 5 + 8 = 15

/* 
A takes 1 minute to cross the bridge.
B takes 2 minutes to cross the bridge.
C takes 5 minutes to cross the bridge.
D takes 8 minutes to cross the bridge.
There is only one torch with them and the bridge cannot be crossed without the torch. There cannot be more than two persons on the bridge at any time, and when two people cross the bridge together, they must move at the slower person’s pace. */

// 8  --- 1  17 M  8  ---- 1  5 ------- 1 2 15
2 ---- 1
8------ 2 
2------- 1
  5  -------1 
  2        



  2 --- 2
  8-----1
  5------



  /* 
A takes 1 minute to cross the bridge.
B takes 2 minutes to cross the bridge.
C takes 5 minutes to cross the bridge.
D takes 8 minutes to cross the bridge.
There is only one torch with them and the bridge cannot be crossed without the torch. 
There cannot be more than two persons on the bridge at any time, and when two people cross the bridge together, they must move at the slower person’s pace. */

a,b ----- 2 1
5+8 -----------  8  2 
                2

                