
/* 
NodeJS provides three ways to call asynchronous functions
1) setImmediate()
 Use setImmediate() when you want to execute some function asynchronously, but as soon as possible and after finishing the current block.

2) setTimeout()
Use setTimeout() when you want to execute some function asynchronously, after a specified delay and after finishing the current block.

3) process.nextTick()

    Callbacks scheduled using process.nextTick() will be processed after the execution of the current phase


*/

/* console.log('first')

setTimeout(()=>{
    console.log('hello')
},2000) */

            setImmediate(()=>{
                console.log(' called setImmediate')
            })
            setTimeout(()=>{
                console.log('called Timeout')
            },1000) 
         
            console.log("yes i am")

//console.log('first')



 
  















