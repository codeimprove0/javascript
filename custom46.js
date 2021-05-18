 /* 
 
Promise. race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.
Promise. any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected,
 
 */

var promise1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
       // resolve('Data called')
       reject(new Error("any error1"))
    },2000)
})

var promise2 = new Promise((resolve,reject)=>{ 
    setTimeout(()=>{
       // resolve('Data called 2')
       reject(new Error("any error"))
    },1000)
})

var promise3 = new Promise((resolve,reject)=>{ 
    setTimeout(()=>{
       // resolve('Data called 3')
        reject(new Error("any error3"))
    },3000)
})


const promises = [promise1,promise2,promise3];

Promise.race(promises)
.then((values)=>console.log(values))
.catch((e)=>console.log(e))
