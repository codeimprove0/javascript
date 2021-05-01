


//async await

function getApiData(){

    let userInfo = {
        userId:12,
        name:'Code Improve',
        address:'XYZ'
    }

    return new Promise((resolve,reject)=>{ 
        setTimeout(() => {
            resolve(userInfo); 
        }, 5000);
    });
  /*   setTimeout(() => {
        return userInfo;
    }, 2000); */
   
}

async function homePage(){
    let apiRecord = getApiData();
    console.log(apiRecord)
    console.log('home page')
}

homePage();
