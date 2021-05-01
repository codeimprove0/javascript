
// Iterators  & function generators

// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. 
/* 
    value,done
*/ 

/* function listData(values){
    let nextIndex = 0;
    return {
        next: function(){
            if(nextIndex < values.length){
                return {
                    value: values[nextIndex++],
                    done:false
                }
            }else{
                return {
                    done:true
                }
            }
        }
    } 
}
 
let arr = [12,14,16,18,20];

const lists = listData(arr);

console.log(lists.next().value);
console.log(lists.next().value);
console.log(lists.next());
console.log(lists.next());
console.log(lists.next());
console.log(lists.next());

 */

function* generators(i){
    yield i;
    yield  i+10;
    yield  i+20;
}

const gen = generators(10);
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())