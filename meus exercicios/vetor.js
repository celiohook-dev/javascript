var nome = ['Célio', 'Eduardo', 'Ana']

/*nome.sort()
nome.length
nome.push('Maria')
console.log( `Os nomes são ${nome}`)

for (pos in nome){
    console.log(`A posição ${pos} tem o nome ${nome[pos]}`)
}

let n =nome.indexOf('Célio')

if (n== -1){
    console.log(`O nome não foi encontro!`)

}

else{

    console.log(`Marcos está na posição ${n}`)
}


nome.forEach((value,index,array)=>{
    console.log("value",value)
})
    
nome.map((value,index,array)=>{
    console.log("value",value)
    console.log("index",index)
    console.log("========")

    
})
*/

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

pessoas.filter((value,index,array)=>{
    return menorIdade=value.idade < 18
    return menorIdade
})

console.log(pessoas)

const nums =[1,2,3,4,]

const dobro= nums.map((x=> x *2))
console.log(`O dobro dos números é ${dobro}`)