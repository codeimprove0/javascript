
 // array & object destructuring

 let arr = [12,14,16,18,20,22];

/*  let first = arr[0];
 let second = arr[1];
 let third = arr[2];
 console.log(first,second,third)
 */
 //let [a1,a2,a3,a4] = arr;
/*  let [a1,,,,,endData] = arr;

 console.log(a1,endData) */

 let userInfo = {
     userName:'Code Improve',
     userId:117,
     phone:9000000009,
     address:{
         street:4,
         city:'NA',
     }
 }

 let {userName:uname,userId,address} = userInfo

 console.log(uname,userId,address.city)