/* 

function getApi(){

    return new Promise((resolve,reject)=>{
        resolve('hello')
    })
}

function getApi2(){

    return new Promise((resolve,reject)=>{
        resolve('hello')
    })
}
 
 let promise = new Promise([f1,f2]).all().then() */


/* 
let arrObj = [

    {
        name:'test1',price:121
    },
    {
        name:'test2',price:125
    }
]

let newArr = arrObj.map((item,index)=>{
    return (index ==0) ? {...item,name:'new name'} : item
})

let sum = arrObj.reduce((value,item)=>{
    return item.price+value.price;
})
console.log(sum);

 */

/* const next = {
    ages: [1, 2, 3],
    next: {
        ages: [4, 5, 6],
        next: {
            ages: [7, 8, 9]
        }
    }
}

function getAge(obj){
    let newArr = [];

    if(obj.ages.length > 0){
        for(let i = 0;i <obj.ages.length;i++){
             newArr.push(obj.ages[i]);
        }
    }
    if(typeof obj.next == 'object'){
        let data =  obj.next; 
        newArr =  concat(newArr,getAge(data)) 
    }
    return newArr;
}

 */

















