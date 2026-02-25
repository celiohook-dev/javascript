function Gerar() {
    let num = window.document.getElementById('n') 
    let tab = window.document.getElementById('seltab')

    
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número')
       
    }
    else{
       let n1= Number(num.value)
       let c = 1 
     tab.innerHTML = ''

       while (c <= 10) {
        let item = document.createElement('option')
        item.value = `tab ${c}`
        item.text =`${n1} * ${c} = ${n1*c}`  
        tab.appendChild(item)
        c++
      

       }
     

    }


}


   

   