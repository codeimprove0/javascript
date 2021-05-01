 

 var p1 = new Promise((resolve,reject)=>{
    let sqldata = {
        id:1,
        name:'Code Improve',
        ssID:1212
    };
    resolve(sqldata)
 });


 var p2 = new Promise((resolve,reject)=>{
    let sms = 'Text message';
    //resolve(sms);
    reject(new Error('SMS Template'))
 })


 var p3 = new Promise((resolve,reject)=>{
    let apiData = {
        statusCode:200,
        data:9090
    };
    resolve(apiData)
 })


/*  Promise.all([
      p1.catch(error=>{return error}),
      p2.catch(error=>{return error}),
      p3.catch(error=>{return error})
    ])
 .then((results)=>{
     console.log(results[0]);
     console.log(results[1]);
     console.log(results[2]);
 })  */


  Promise.all([p1,p2,p3])
 .then((results)=>{
     console.log(results)
 })
.catch(err=>{
    console.log(err)
})  

/*  p1.then((value)=>{
        console.log(value)
 }) */