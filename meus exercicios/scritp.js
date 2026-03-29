const soma =(a,b,callback) =>{
    setTimeout(() => {
        callback(a+b)
        
    }, 1000);
}

const mostrar_soma = soma(10,9,(mostrar_soma)=>{
    console.log(mostrar_soma)
})