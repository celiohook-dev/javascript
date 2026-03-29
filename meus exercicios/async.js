/*function buscardados () {
return  new Promise((resolve, reject) => {
     setTimeout(() => {
       const dados = {nome:"Joãa", idade:30}
       resolve(dados)
      

     }, 2000);
    
  });
}

buscardados().then((dados)=> console.log(dados))

*/


async function buscardados() {
  try{
     const dados = await new Promise((resolve, reject) => {
      setTimeout(() => {
         const dados = {nome:"Joãa", idade:30}
       resolve(dados)
      
      }, 2000);
      
     });
     console.log(dados)

}catch (erro) {
  console.log(erro)
}
}

buscardados()