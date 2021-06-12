


/* let arr = [
{
    name:'test',age:20
},
{
    name:'test2',age:15
},{
    name:'test3',age:17
} 
]

let newArray  = arr.sort((x,y)=>{
    return (x.age==y.age)?0:(x.age<y.age)?1:-1
})

console.log(newArray); */






/* let dates = new Date();
let dates2 = new Date('2021-08-15') 


let diff =  dates2.getDay();
console.log(diff)
 */























/*  
 const sleep = (str,time)=>{
     
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(str)
        },time)
    })
 }

 const print = async ()=>{ 
    let first =  await sleep('A',2000)
    console.log(first)
    let second =  await sleep('B',3000)
    console.log(second)
    let third =  await sleep('C',1000)
    console.log(third) 
 }

 print(); */



function same(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i =0;i<arr1.length;i++){

        let correct  = arr2.indexOf(arr1[i]**2)
        console.log(correct,arr1[i])
        if(correct === -1){
            return false;
        }else{
            console.log("remove",correct)
          arr2.splice(correct,1)
        } 
    }
    return true
}
function same2(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
     let obj1 = {}
     let obj2 = {}
     for(let val of arr1){
         obj1[val] = (obj1[val] || 0) + 1
     }
     for(let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    console.log(obj1,obj2)
    for(let key in obj1){
        console.log(5 in obj2,'===',key)
        if(!(key ** 2 in obj2)){
            return false
        }
        if(obj2[key**2] !=obj1[key]){
            return false
        }
    }

    return true
}

function same3(arr1,arr2){
    if(arr1.length != arr2.length){
        console.log('ok')
        return false;
    }
     let obj1 = {}
     let obj2 = {}
     for(let val of arr1){
         let me = (obj1[val] || 0) 
        // console.log(me)
         obj1[val] = (obj1[val])? obj1[val]+1:1  //(obj1[val] || 0) + 1 
     }
     for(let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    //console.log(obj1,obj2)
    for(let key in obj1){  
        if(!(key in obj2)){ 
            return false
        }
        if(obj2[key] !=obj1[key]){
            return false
        }
    }

    return true
}
let arr1 = [4,3,2];
let arr2 = [4,16,9]; 

 
let data = same3('anagram','nagaram');

//console.log(data)

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    } 
    const lookup = {}; 
    for (let i = 0; i < first.length; i++) {
      let letter = first[i]; 
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup) 
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      console.log(lookup[letter],'==',letter)
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
/* let dataw =   validAnagram('anagrams', 'nagaramm')
console.log(dataw) */

//########## Unique value in array #######
function countUnique(arr){
    var i = 0;
    for(let j=1;j<arr.length;j++){
        console.log(arr[i]+'===='+arr[j]) 
        if(arr[i] !=arr[j]){ 
            i++;
            arr[i] == arr[j]
        }
    }
    console.log(arr)
    return i+1;
}
let nm = countUnique([1,2,3,7,6,12,4,4,4,4,4,5]);
console.log(nm)


let smallestnum = 10;
let arr  =[2,8,4,6,10,5,7];
let obj = {};  


select email from invites


num 10 
arr = [1,3,4,6,7,10]  // 
arr  = [];
arrsum = 200
arrsum = 188 

let obj = {
    1:1,
    4:4,
    7:7
}
arrfinal = [];
for( i=1;i<=10;i++)
if(obj[i] != i){
    if(obj[i] != i){
        arrfinal.push(i)
    }
}

}
let arr = [12,14,15,6]
for(let i =4;i>0;--i){
   // a = 6
    arr[i-1] = arr[i]
    arr[0] =  
}