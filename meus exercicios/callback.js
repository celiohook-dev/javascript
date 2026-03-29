/*
fazerPizza = (sabor,callback) => {

    console.log(`Fazendo pizza de ${sabor}...`)

    setTimeout(()=>{

        callback
    },
    
   1500 )
}


pizzaPronta =() =>{
  
}

fazerPizza ("cabresa",pizzaPronta())
console.log("A pizza está pronta! Bom apetite!" )
*/

// Callbacks anonimos

fazerPizza = ("mussarela", function(){
    console.log("A pizza de mussarela está pronta! Aproveite")
})

fazerPizza()
