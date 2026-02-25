function desafio2 () {

let nome = window.prompt("Qual é o nome do aluno? ") 
let res = window.document.getElementById("res") 
let r = window.document.getElementById('r') 
let re = window.document.getElementById('re') 
let resul=window.document.getElementById('resul')
let nota1= window.prompt(`Primeira nota de ${nome}`)
let nota2= window.prompt(`Segunda nota de ${nome}`)



var media=(nota1 + nota2)/2

media.toFixed(2)




res.innerHTML=(` <h1> Analisando a situação de ${nome} </h1> `)
re.innerHTML=(`Com as notas ${nota1} e ${nota2}, a média é ${media}  `)




}