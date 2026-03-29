// sintaxe

/*
function primeiraFuncao () {
    return new Promise ((resolve) =>{
        setTimeout(() => {
          console.log("Esperou isso aqui!")
          resolve()  
            
        }, 2000);
    })
}

 async function segundaFuncao () {
    console.log("iniciou")

    await primeiraFuncao()

    console.log("Terminou")

}

segundaFuncao()



 function getUser (id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
  .then((data) => data.json ())
  .catch((err)=> console.log(err))

 } 

async function showUser (id) {
    const user = await getUser(id)

    console.log(`O nome do usúario é: ${user}`)
}

showUser(3) 
*/

const getUser =(id) =>{
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data)=> data.json)
    .catch((err)=> console.log(err))
}

const showUser = async (id) =>{
      const user = await getUser(id)

    console.log(`O nome do usuário é: ${user} `)
}

showUser(3)