var agora = new Date ()
var hora = agora.getHours()
var seg = agora.getMinutes()
var ano = agora.getFullYear()

console.log(`Agora são extamente ${hora}horas e ${seg} minutos e o ano é ${ano}!`)

if  (hora < 12){

console.log("Bom dia!")
}
else if (hora <=17){
    console.log("Boa Tarde!")
}

else{
    console.log("Boa Noite")
}