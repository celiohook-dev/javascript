const loginUser =(email,password,callback) =>{
    setTimeout(() => {
        console.log("User logged")
       callback({email:email, password:password})
        
    }, 1000);
}

const user =loginUser('Celiohooh@gmail.com',"12334",(user)=>{
     console.log({user })    

})

const yt = new Promise(resolve=>{
    setTimeout(() => {
        resolve ("Videos from youtube")
        
    }, 1200);

})

const fb =new Promise(resolve=>{
    resolve("posts from facebbok")
})

const tk = new Promise((resolve) => {
   resolve("Views from tiktok")
    
})

Promise.all([yt,fb,tk]).then((result)=>{
    console.log(result)
})