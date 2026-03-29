 const loginUser = (email,password,callback) =>{

    setTimeout (()=> {
        console.log("User logged!")
       callback(email)



    },500)
 }

 const getUserVideo = (email,callback) => {
     setTimeout (()=>{
            callback(["video1","video2", "video3"])



    },2000)

 }
 const getUserImagem = (email,callback) =>{
    setTimeout(() => {
        callback(["imagem1","imagem2","imagem3"])
        
    }, 2000);

 }

 getUserVideoDetails = (video,callback) =>{
   setTimeout(() =>{
    callback({title: "video title"})
     

   }, 2500)

 }
 
const user = loginUser ("celio@gmail.com","123456", (user)=>{
  getUserVideo(user.email, (videos)=>{
    getUserVideoDetails (videos[0] , (videodetails)=>{
   console.log(videodetails)
})
        console.log(videos)
    
    })
    getUserImagem (user.email, (imagem)=>{
        console.log(imagem)
    })
    
    
}) 


