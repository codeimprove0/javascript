
 let userInfo = {

    firstName:'Code',
    lastName:'Improve',
    language:'',
    get fullName(){
        return this.firstName+' -- '+this.lastName;
    },
    set lang(lang){
        this.language = lang;
        this.firstName = this.firstName.toUpperCase();   
    }
 }

 userInfo.lang = 'en';

 console.log(userInfo.fullName)