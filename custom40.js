
// Lexical Scope for This

let userInfo = {

    name:'code Improve',
    getInfo:  function (){

       /*  (function dummy(){
            console.log("dummy fn "+this.name)
        })(); */

       /*  function dummy(){
            console.log("dummy fn "+this.name)
        } */
       /*  const dummy = function(){
            console.log("dummy fn "+this.name)
        } 

        dummy(); */
        //console.log("yes called "+this.name)


        /* (()=>{
            console.log("dummy fn "+this.name)
        })();  */

         /* dummy = ()=>{
            console.log("dummy fn "+this.name)
        } 

        dummy(); */


        function dummy(){
            console.log("dummyss fn "+this.name)
        } 
       // dummy();
       /// dummy.call(this);
       ///dummy.apply(this);
       let newFn = dummy.bind(this);
       newFn();
    }
}

userInfo.getInfo();