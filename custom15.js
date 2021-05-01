
function userName(){
    return 'Name is '+this.firstName+' '+this.lastName;
}

let nameObj = {
    firstName:'Ram',
    lastName:'Mahesh'

}

let nameCheck = userName.bind(nameObj);

console.log(nameCheck())


 let userInfo ={

    fname:'Code',
    lname:'Improve',
    uId:'111',
    'email ID':'test@gmail.com',
    fullName: function (){
        return this.fname+' '+this.lname;
    },
    info: function(id,text){
        return 'Address XYZ '+ this.fname+' id is '+id+' text is:-'+text;
    }

 }

//console.log(userInfo['email ID']);
 //console.log(userInfo.lname)

/*  let userName = userInfo.fullName();
 console.log(userName) */

 // call
  let userNewObj = {
     fname:'Test Demo'
    }
 //let information = userInfo.info.call(userNewObj,'12','subject');

 let information = userInfo.info.apply(userNewObj,['12','subject']);

console.log(information)  

/* let getidFn = userInfo.info(55);
console.log(getidFn) */


/*  let empDetail  = {
     id:112,
     name:'demo',
     age:'55'
 }; */

/* for(obj in empDetail){
    console.log(empDetail[obj])
} */

/* var empArray = Object.values(empDetail);

console.log(empArray) */