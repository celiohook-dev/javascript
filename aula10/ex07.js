var agora = new Date()
var ds =agora.getDay()

console.log(ds)

switch (ds) {

    case 0:
        console.log('Domingo')
        break
    case 1 :
        console.log("Segunda-feira") 
        break
    case 2:
        console.log("Terça-feira")  
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")  
        break
    case 5:
        console;log("SExta-Feira")
        break
    case 6:
        console.log("Sabádo")
        break
        
     default:
          console.log("[erro] Dia Inválido")
}