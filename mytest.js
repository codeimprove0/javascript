 
 const https = require('https');

 https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
   
   let data = '';
 
   // parse json data here...
   
   console.log(resp.data);
 
 });