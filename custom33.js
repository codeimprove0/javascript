 
let str = 'This is improve file for improve project';

//let reg = /improve/i;
 let reg = /improve/g;

 //------exec-----//

/*  let response = reg.exec(str);

 console.log(response) 
 */
/*   response = reg.exec(str);

 console.log(response) 

 response = reg.exec(str);

 console.log(response) 
 */

 //-------- test -----//

/*  let response =  reg.test(str);
 console.log(response); */

 //--------  match ------//

/* let result = str.match(reg);
console.log(result); */

//------- search ------//
/* let result = str.search(reg);

console.log(result) */

// ----- replace-//
/* console.log(str)
let result = str.replace(reg,'Code Improve');
console.log(result) */


//-------metecharcter-----------//
 str = 'This is iprove file _for 24improve project color exampl?e fixe*d ';
 
 reg = /improve/g;

 reg = /^This/; //  start 
 reg = /project$/;  // end

 reg = /f.le/; //  single char match any
 reg = /f*le/; // match more any 0 or more

 reg = /colou?r/; // u optional

 reg = /exampl?e/;  // ?  \

 reg = /fixe\*d/;    ///  * \

 ///-----------/////

 reg = /\w+rove/;   // w W
 reg = /\Wfile/;   // start  _, alphabet number
 
 reg = /\W+file/;

 reg  = /\sfor/;  // s S not   space character

 reg  = /\Sfor/;


 reg  = /\dimp/;   // check digit


 reg  = /\Dimp/;   // check non digit
 reg  = /\D+imp/; 

///----- Bracket ---------///

str = 'This is  coco improve';

reg = /imp[tyr]ove/;   /// t y r
reg = /imp[a-z]ove/;
reg = /imp[a-zA-Z]ove/;

reg = /imp[^rxz]ove/; //  ^ not

reg = /imp[^ty]o[v]e/;


reg = /co{2}l/;  // match 2 oo

reg = /co{0,2}l/;  //  0,1,2 match o

reg = /(code|co|api){2}/;  //  |

 if( reg.test(str)){
      let finalResponse =  reg.exec(str);
      console.log(finalResponse)

 }else{
     console.log('Match Not');
 }



