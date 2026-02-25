function carregar() {
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var min = data.getMinutes()
   //var hora =data.getHours ()

   var hora = 22


 
    msg.innerHTML=` <strong> Agora são ${hora} horas e minutos </strong> ${min}`
   

   if (hora < 11){
    // Bom dia
     img.src ="manha.jpg"
     document.body.style.background='#e2cdf9'
      
   }

   else if (hora >=12  && hora <=17){
    //Boa Tarde
    img.src="tarde.jpg"
    document.body.style.background="#b5846f"


   }

   else {
    //Boa Noite
    document.body.style.background="#515254"
 
    img.src="noite.jpg"
   

   
    

   }



}