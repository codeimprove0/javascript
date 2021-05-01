

let marks = 30;

if(marks > 33){

    console.log("pass")
}else{
    console.log("fail")
}

let status = 'B'


if(status =='A'){
    console.log("Complete")
}else if( status =='B'){
    console.log("Pending")
}else{
    console.log("Fail")
}

switch(status){ 
    case 'A':
        console.log("yes M ok")
     break;
     
     case 'B':
         console.log("Not good")
    break;

      default:
        console.log('ok ok')    
}