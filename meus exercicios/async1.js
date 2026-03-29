/*

function primeiraFuncao () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            console.log("Esperou isso aqui!")
            resolve()
        },100);
    })
}

async function segundaFuncao() {
    console.log("Inicio")

   await primeiraFuncao()

    console.log("Terminou")
    
}

segundaFuncao()

function getUser (id){
    return fetch(`https://regres.in/api/user?id=${id}`)
    .then(data =>data.json())
    .catch(err => console.log(err))
}

async function showUser(id) {
    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)

    
}






function buscarUsuario(nome) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({nome: nome, idade: 25})
    }, 2000);
        
    })
}


async function mostrarusuario() {
    console.log("Buscando usúario......")
    let usuario = await buscarUsuario("Ana")
    console.log("👨‍✈️usuário", usuario)
    console.log("Pronto!")
    
}

mostrarusuario()


*/



//funcao assincrona com fetch



















