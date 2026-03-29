/*const soma = (n1,n2) => n1 + n2
console.log(soma(10,10))


const dobro = (n) => n*2
console.log(dobro(10))

// Filtragem de numeros pares

const numeros =[1,2,3,4,5,6,]
const pares = numeros.filter((x) => x % 2 == 0)
console.log(pares)

// Filtragem de numeros impares

const numeros =[1,2,3,4,5,6,]
const impares = numeros. filter((x) => x % 2 == 1 )
console.log(impares)


// Mapeamento em um array

const numeros = [1,2,3,4,5,6]
const strings = numeros.map ((x) => `Número: ${x}`)
console.log(strings)
*/

// Objectos , Array , Function

const pessoas = [
    {
        nome:"celio",idade:19
    },
    {
       nome:"Eduardo",idade:18
    },
    {
        nome:"Fred",idade:20
    }

]

const nomes = pessoas.map ((pessoa)   => pessoa.nome)
console.log(nomes)  

