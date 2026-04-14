
/*function soma (... args){
    const inicialValue = 0

    const total = args.reduce((acumulator,cureentValue)=> acumulator+cureentValue, inicialValue  )


    
    return total

}

console.log(soma(1,2,3,4,5,7))
*/

const number = [1,3,4,5,6,7,8]


const soma = number.reduce((acumulator,cureentValue)=> acumulator + cureentValue, 0)

console.log(soma);

