 const loginUser = (email,password,onSucess,OnError) =>{

    setTimeout (()=> {
        console.log("User logged!")
       const error = true
       

       if (error) {
        return OnError(new Error ("error i login"))
       }

       console.log("User logged:")
       onSucess ({email})

    },1500)
 }

 const loginUserPromisse = (email,password) =>{
    return new Promise((resolve,reject) =>{
     const error = false

     if(error) {
        reject(new error("error in login!"))

     }

     console.log("User logged")
     resolve({email})

    })


 }

loginUserPromisse("celio@gmail.com",'123456').then((user)=>{
    console.log(user)



 }).catch((error)=>{
    console.log(error)
 })


const getUserVideos = ((email)=>{
   return new Promise = (resolve,reject)
   setTimeout (()=>{
      resolve (["video1", "video2", "video3"])


   })
},2000)


/* const getUserVideosDetails = ((video)=>{
    return new Promise = (resolve,reject)
    setTimeout(() => {
      resolve ({title: "video title"})
      
    }, 2000);
 
})

loginUserPromisse("celio@gmail.com",'123456'){
   .then(user) => getUserVideos(user.email)
 .then(videos)=> getUserVideosDetails(videos[0])
  .catch(error) => console.log ({error})

}

*/
// Promisse all

const yt = new Promise(resolve =>{
   setTimeout(() => {
      resolve ("videos from youtube")
      
   }, 2000);


})

const fb = new Promise (resolve=>{
    setTimeout(() => {
      resolve("videos posts facebook")
      
    }, 2000);

})

Promise.all([yt,fb]).then((result)=>{
   console.log({result})
})