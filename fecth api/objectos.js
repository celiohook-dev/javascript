const car = {
    nome: "Corolla",
    Color: "Black",
    fabrication: 2020,
    "size-car": "4 metros",
    "air-bag": true
}

// Acessar propriedades de um objecto
console.log(car.nome);

 console.log(car["size-car"])
console.log("================");

 // Modificar o valor de uma propriedade

 car.nome = "Honda Civic"
 console.log(car.nome)
 
// Criar nova propriedade

console.log("==============")
console.log(car.age);
car.age = 3
console.log(car.age);

// Deletar uma propriedade
delete car.age
console.log(car.age);


// Verificar propriedade

if("nome" in car){
    console.log("nome existe dentro do car");
    
}
else{
    console.log("Nome não existe no car")
}
