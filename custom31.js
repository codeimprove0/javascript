 
  var p1 = new Promise((resolve,reject)=>{
    let sqldata = {
        id:1,
        name:'Code Improve',
        ssID:1212
    };
    setTimeout(() => {
        resolve(sqldata)
    }, 2000);
   
 });
 
 var p2 = new Promise((resolve,reject)=>{
    let sms = 'Text message';
   // reject(new Error('API 500!'))
    
    setTimeout(() => {
        resolve(sms); 
    }, 5000);
 })
 
 var p3 = new Promise((resolve,reject)=>{
    let apiData = {
        statusCode:200,
        data:9090
    };
    setTimeout(() => {
        resolve(apiData)
    }, 2000);
   
 })


 Promise.race([p1,p2,p3 ])
 .then((results)=>{
     console.log(results) 
 }) 

/* 
 Promise.allSettled([p1,p2,p3 ])
 .then((results)=>{
     console.log(results)
     console.log('first',results[0].value)
     console.log('second',results[1].status)
     console.log('third',results[2].value)
 })  */

/* 
 Promise.all([
    p1.catch(error=>{return error}),
    p2.catch(error=>{return error}),
    p3.catch(error=>{return error})
])
 .then((results)=>{
     console.log(results)
 })  */