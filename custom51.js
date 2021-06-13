 
/*  
 let obj = {
     name:'code',
     ip:'767677',
     id:'0909'
 } 

 delete obj.ip */
   let obj = Object.create({
    name:'code',
    ip:'767677',
    id:'0909'
 })

 delete obj.ip
 
 //obj.data = [12,13,14]
 console.log(obj)
 console.log(obj.ip)