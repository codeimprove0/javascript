

// GET API//
/* var url = 'http://localhost/api/article-list';

fetch(url)
.then(response=> response.json())
.then(response=>{
    console.log(response)
})
.catch(err=>{
    console.log('error:-',err)
}) */

//--- GET ---
/*  async function getArticleList(){
    console.log('Article Page')
    var url = 'http://localhost/api/article-list';
    let response = await fetch(url);
    response = response.json(); 
    return new Promise((resolve,reject)=>{
        resolve(response);
    })

}
 */

async function addArticleList(){
    console.log('Article Page')
    var url = 'http://localhost/api/add-registration';
 
    let options = {
        method:'POST',
        headers:{
            'sssss':'test'
        },
        body:JSON.stringify({
            name:'Code Improve',
            email:'test@gmail.com',
            dummy:'1233'
        })
    }
    let response = await fetch(url,options);
    response = response.json(); 
    return new Promise((resolve,reject)=>{
        resolve(response);
    })

}


async function  getHomeData(){
    console.log('Home page')
    let apiData = await addArticleList();
    console.log(apiData)
}
getHomeData();