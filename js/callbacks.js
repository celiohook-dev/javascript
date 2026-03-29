/*
function performe(name,exe) {
    console.log(name,"executou uma função")
    exe()
} 

performe("Célio", ()=>{
    console.log("olá!")
})


const numbers = [3,18,21,44,-92,439,-12,22,185,201]

const filtered = numbers.filter((number) => number <100)

console.log(filtered)

*/ 
 
const  fazerPiza = (sabor, callback) =>{
    console.log(`Fazendo uma Pizza de ${sabor}`)
    setTimeout(() => {
        callback(sabor)

    }, 1500);
}

const pizzaPronta= fazerPiza("calabresa", (callback)=>{
    console.log("Pizza pronta, Boa apetite!")
    console.log("Obrigado e volte sempre!")


})