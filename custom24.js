// IIFE (immediately invoked function expression)
///Higher order functions are functions that operate on other functions

/*  (function  getData(id,name){
     console.log('get data called ',id,name)
     return 1;
 })(12,'Code Improve');  */


/*  function getStudentInfo(batch){

    var response = '';
    if(batch ==2021){
        response = (name,id)=>{
            return 'Upsc Topper '+name+' id is'+id;
        } 
    }
    if(batch ==2020){
        response = (name)=>{
            return 'University Topper '+name;
        } 
    } 
    if(batch ==2010){
        response = (name)=>{
            return 'School Topper '+name;
        } 
    }   
    return response;
 }

 let information  = getStudentInfo(2021)('Rahul',2020202);
 console.log(information) */

/*  let information  = getStudentInfo(2021);

 console.log(information()) */



 function getStudentInfo(batch){ 
    if(batch ==2021){
        return function (name){
            return `Upsc Topper ${name}`;
        } 
    }
    if(batch ==2020){
        return function (){
            return 'University Topper ';
        } 
    } 
    if(batch ==2010){
        return function (){
            return 'School Topper ';
        } 
    }    
 }

 let information  = getStudentInfo(2021)('Manoj');
 console.log(information)