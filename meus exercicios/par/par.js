function verificar () {


var n1 = window.document.getElementById('num')
var res = window.document.getElementById('res')
var n = Number(num.value)
res.innerHTML=`O número é ${n} <br>`

if (n % 2 == 0) {
    res.innerHTML+=(`O número ${n} é Par`)
}

else {
    res.innerHTML+=(`O número ${n} é Impar`)
}




}