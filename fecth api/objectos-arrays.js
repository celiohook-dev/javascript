const cars = [
    {
        id : '1',
        nome: "Corolla"
    },

        {
        id : '2',
        nome: "Honda Civic"
    },

        {
        id : '3',
        nome: "Ferrari"
    }
]

// Acessar individualmente

console.log(cars[0].nome)

console.log({cars})

// Acessar via lopp
console.log("===============");

for (const car of cars ) {
    console.log(car.nome);
    console.log((car.id));
    
    
}