// Callback
 function carregarPagina () {
  
    setTimeout(() =>{
        console.log("Carregando a página")
        console.log('Página carregada')
     
        
    },5000);
   

 }
 function paginaPronta() {
    
 }
   
  

carregarPagina(paginaPronta())

// arrow functions

const soma = (a,b) =>{
    return a + b
}

console.log(soma(2,3))

// foreach

const numeros = [1,2,3,4,5,6,7]

function cada(value,index,array){
   console.log("value",value)
   console.log("index",index)
   console.log("array",array)
   console.log("================")

}

numeros.forEach(cada)
