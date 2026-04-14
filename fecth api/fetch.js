/*let result = []


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((json)=>{
    (result=json)

result.forEach(item => {
    console.log(item);
    
    
});



fetch('https://api.github.com/users/cursoemvideo')
.then((response)=> response.json())
.then(user=>{
    console.log(user.name);// "Curso em video"
    console.log(user.avatar_url); //link da fota
    console.log(user.bio);//bio do 
    console.log(user.followers);//seguidore    
    
    
    
})
*/
async function usuarios() {
    try{
       const response = await fetch('https://api.github.com/users /celiohook-dev')
    const user = await response.json();
    console.log(user.name);// "Curso em video"
    console.log(user.avatar_url); //link da fota
    console.log(user.bio);//biografia
    console.log(user.followers);//seguidores 
    }catch(error){
        console.log(error.message);
        console.log('O programa falhou!');
        
        

    }
   

}

usuarios();

  