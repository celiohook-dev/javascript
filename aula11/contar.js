function contar () {

let ini = window.document.getElementById('txti')
let fim = window.document.getElementById('txtp')
let passo= window.document.getElementById('txtp')
let res = document.getElementById('res')


if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    res.innerHTML='Impossivel contar!'

    window.alert('[Erro] faltam dados')

} 
else{
    res.innerHTML='contando:....'

    let i =Number(ini.value)
    let p =Number(passo.value)
    let f =Number(fim.value)


    if (i<f) {
        // Contagem crescente
        for (let c=i; c<=f; c+=p){
            res.innerText += (`${c}\u{1f603}` )
      
           }

        }
        else {
            // Contagem regressiva
            for (let c=i ;c >=f;  c-=p ){
                res.innerText += (`${c}\u{1f603}` )
               
            }
        }
}

 res.innerHTML+=`🏁`

    }