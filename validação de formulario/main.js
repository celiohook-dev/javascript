const button = window.document.querySelector('#button')
const user = window.document.querySelector('#user')
const password = document.querySelector('#password')

button.addEventListener('click',(event)=>{
    event.preventDefault()

    if(user.value == ""){
        user.classList.add('erro')
    }

    if (password.value == ''){
        password.classList.add('erro')
    }

    if (email.value == '') {
        email.classList.add('erro')
    }

    if(email.value.indexOf("@")== -1 || email.value.indexOf(".") == -1||( email.value.indexOf("." - email.value.indexOf("@" == 1))) ){
        email.classList.add('erro')
    }

    
  


})