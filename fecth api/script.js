/*function buscarUsuario (nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nome)
            
        }, 2000);
        
    })
}

async function mostarUsuario() {
    console.log("Buscando usuario.....")
    let user = await buscarUsuario("{nome: Ana, idade: 24}")
    console.log(user);
    
    console.log("Pronto!");
    
    
}

mostarUsuario()





fetch("https://api.github.com/users/octocat").then(res => res.json()).then(json =>{

 

 document.getElementById("usuario").innerHTML= `
 <img src="${json.avantar_url}" width="500px">
<h2> ${json.name} </h2> 
<p>Seguidores: ${json.followers} </p>
<p>Repos: ${json.public_repos} </p>


`
 



})







fetch("https://api.github.com/users/celiohook-dev").then(res => res.json()).then(json =>console.log(json)).catch(err => console.log(err))

function buscarUsuario(nome){
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(nome)
            
        }, 2000);
        
    })
}

async function mostarUsuario() {
    console.log("Buscando Usuário.......")
      let user = await buscarUsuario("{nome: Ana, idade: 24}")
    console.log(user)
    console.log("pronto!")
    
}

mostarUsuario()



function Usuario(nome,email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({nome,email})
            
        }, 1500);
    })
}

async function dados() {
    console.log("Buscando dados do usuario....")
    const user = await Usuario("Célio", "celio@gmail.com")
    console.log(user)


    
}

dados()

*/

// Destruturaçã0

const pessoas = {
    nome: "celio",
    idade:19,

};
