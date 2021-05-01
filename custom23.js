
// closure :- Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned
 

function marks(math,eng){

    console.log('outer fn ',math,eng)
    let internal = 30;
    const totalMarks = ()=>{
        let pract = 20;
        let total = math+eng + internal + pract;
        return total; 
    } 
    return totalMarks;

}

let getMarks = marks(80,90);
let mkTotal = getMarks();

console.dir(mkTotal)