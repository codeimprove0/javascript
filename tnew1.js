/* 
let arr = [1,2,3,4,5,4,3,4,5,2,33,1,4,5,2,2,3];
        'even' 'odd'
let arr = [1,2,3];
// 6  
let iseven = true;
for(let i = 0;i<arr.length;i++){ 
    let num = sum - arr[i]; 
    let ouput = (iseven(arr[i])) ? "Even":'Odd'
    console.log(n) 
}

function iseven(number){
    let data = (number)/2*2==number; 
    return data;
} 
 */


/* let arr = [1,2,3,4,5,4,3,4,5,2,1,33,4,5,2,2,3];

let obj = {};

for(let i=0;i<arr.length;i++){ 
    obj[arr[i]] =  (obj[arr[i]]) ? obj[arr[i]]+1:1; 
}
console.log(obj)



let data  = [{
    name:'test1',
    otehr:'other1'
},
{
    name:'test2',
    otehr:'other1'
},
{
    name:'test3',
    otehr:'other1'
}]

var numbers = 1;
let newData =  data.filter((item,index)=>{
    return (index != numbers);
})
console.log(newData)

 *//* 


Update table set status= (1-status), where status */

orders          orderdetail 
id,city,           amount,product,order_id --5 


select max(totalValue) from (
(select sum(amount) as totalValue from orderdetail 
INNNER JOIN orders ON orders.id   = orderdetail.oorder_id
group by city)


10000
20000
25000


