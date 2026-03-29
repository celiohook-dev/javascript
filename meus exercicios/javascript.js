import {lucas,ana,marcia,celio,fred} from "./metodos.js"

const pessoas =[lucas,ana,marcia]

// Método forEach

/*function callback (value,index,array) {
    console.log('array',array)
    console.log('index',index)
    console.log('value',value)
}

pessoas.forEach(callback)


pessoas.forEach((value,index,array) =>{
    console.log('array',array)
    console.log('index',index)
    console.log('value',value)
    console.log('================')



})


// Método MAP

const nomes = pessoas.map((value,index,array)=>{
    console.log('index',index)
    console.log('value',value.nome)
    console.log('================')

    return value.nome

})

console.log(nomes)


// Método Find

const pessoa= pessoas.find((value, index,Array)=>{
     return value.idade < 18
    
 })

 console.log(pessoa)



 // Método Filter

const  pessoa= pessoas.filter((value,index,array) =>{
    const eMaiorDeIdade = value.idade>=18
    return eMaiorDeIdade;


 })
 console.log(pessoa)

  */

 // Método Reduce

 pessoas. reduce((valorAnterior,valorActual,indexAtual)=> {
    console.log("valorActual", valorActual)


 },0)

