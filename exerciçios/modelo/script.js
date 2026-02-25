function verificar() {
  var data = new Date()
  var a = data.getFullYear()
 var ano=window.document.getElementById('txtano')
 var res = window.document.getElementById('res')
  

 if (ano.value.length == 0 || ano.value>= a ){
    window.alert('Erro! verifique os dados e tente novamente')

 }

 else {

    var fsex = window.document.getElementsByName('radsex')
    var idade = a-ano.value
    var genero =""
    var img =document.createElement('img')
    img.setAttribute('id','foto')

 

  if (idade <17 ){

    img.setAttribute('src','homem com 5.jpeg')
  }

  else if(idade <29){
    img.setAttribute('src','homem com 18.jpeg')
    
  }

 else if( idade<50){
    img.setAttribute('src','homem com 40.jpeg')
    
 }

 else {
  img.setAttribute('src','homem com 60.jpeg')
 }



   if(fsex[0].checked){
    genero ="HOMEM"

   }

   else if (fsex[1].checked){
     genero = "MULHER"
    
    
       if (idade <17){
        img.setAttribute('src','mulher com 5.jpeg')
    

      }
    
      else if(idade <29 ){
        
        img.setAttribute('src', 'mulher com  18.jpeg')
      }
    
     else if (idade < 50) {
        
        img.setAttribute('src','mulher com 40.jpeg')

     }
     else {
      img.setAttribute('src','mulher com 60.jpeg')
     }

   }
   
 }
 res.style.textAlign='center'
 res.innerText=` Detectamos ${genero} com ${idade} anos`
 res.appendChild(img)
}