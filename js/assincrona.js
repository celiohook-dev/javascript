const loginUser = (email,password,callback)=> {
    setTimeout(() => {

        console.log("user logged")
        callback({email})
        
    }, 1500);
}

const user = loginUser("celiohook@gmail.com","123456", (user)=>{
    console.log({user}) 

})


