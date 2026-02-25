function positivo () {

 var n2 = window.document.getElementById('n')
 var res = window.document.getElementById('res')
 var n = Number(n1.value)

 res.style.color='white'

 if (n == 0) {
    res.innerText=(`O número ${n} é Zero`)
}

else  if (n> 0){
    res.innerText=(`O número ${n} é Positivo`)
}

else {
    res.innerText=(`O número ${n} é negativo`)
}



}