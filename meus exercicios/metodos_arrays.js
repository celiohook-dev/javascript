// Método foreach

/*
const nomes=['ana', 'joão','pedro']

nomes.forEach((value,index,array) =>{
    console.log('value',value)
    console.log('index',index)
    console.log("=============")
})


*/

// Método map 

const nums = [1,2,3,4,5]

const dobro = nums.map ((x => x * 2)) 
console.log(`Valores actualizado dos vetores ${dobro}`)

const pessoas =[{
    nome:"ana",
    idade:30,
},
{
    nome:"Célio",
    idade:26,
},
{
    nome: "Maria",
    idade:27,
},
{
    
    nome: "Marcia",
    idade:28,
}]

const pessoa = pessoas.filter((value,index,Array) =>{
    const maiorDeIdade = value.idade> 26
    return maiorDeIdade;

})

console.log(pessoa)

