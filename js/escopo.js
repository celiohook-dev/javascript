// bloco de escopo

/* if (true) {
    const myName =" Célio"
let myAge = 19

console.log(myName)
console.log(myAge)

}


// Const e let so podem ser lidas no escopo onde foram declaradas

// Escopo de Funcao

function main () {
    var nome = "celio"
    console.log(nome)
}

 */

const myName = "Célio"

function  main () {
    const myName = "Eduardo"

    function secondary () {
       
        console.log(myName)
        
    }

    secondary()
}

main( )