 
 // callback hell. & promise & promise all



 var promise1 = new  Promise((resolve,reject)=>{
   console.log('first')
  setTimeout(()=>{ 
    let result = {
      marks:'90%'
    }
    resolve(result)
  },1000)
})

var promise2 = new  Promise((resolve,reject)=>{
  let account = {
    cash:'65'
  }
  console.log('second')
  reject('error found')
})

var promise3 = new  Promise((resolve,reject)=>{
  console.log('third')
    resolve('done')
})

Promise.all([promise1,promise2,promise2])
.then((results)=>{
  console.log(results)
})
.catch(err=>{
  console.log(err)
})





/* var promise1 = new  Promise((resolve,reject)=>{
   setTimeout(()=>{
     console.log('yes called hr');
     resolve('called to HR')
   },2000)
})

var promise2 = new  Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('yes HR to Director');
    resolve('HR to Director')
  },4000)
})

promise1
.then((value)=>{
  console.log(value)
})
.catch(err=>{
  console.log("error is :"+err) 
}) 

promise2.then((value)=>{
  console.log(value)
})  */

/*  setTimeout(()=>{

  console.log('called to HR');
  setTimeout(()=>{
    console.log("HR TO Director");

    setTimeout(()=>{
      console.log('information update');
          
    },1000);

  },1000); 

 },2000);
 */
