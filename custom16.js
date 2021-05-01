 


 let userInfo ={ 
    fname:'Code',
    lname:'Improve', 
    fullName: function (){
        return this.fname+' '+this.lname;
    }, 
 }

//let userName = userInfo.fullName();

let userName = userInfo.fullName;

userName = userName.bind(userInfo);
let getName = userName();

console.log(getName)



/* 
 function userName(){
    return 'Name is '+this.firstName+' '+this.lastName;
}

let nameObj = {
    firstName:'Ram',
    lastName:'Mahesh' 
}
userName()

let uName = userName.bind(nameObj);

console.log(uName()) */