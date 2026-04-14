const cars =['Corola','Honda Civic','Land Rover' ,' Fusquinha']


console.log(cars)
// reverse inverte as posicoes do array
cars.reverse()
console.log(cars, "cars após o reverse");

//function loginPosition(item) {
  //  console.log(item);
    
//}

//FOREACH percorre todos os elementos do array
/*cars.forEach(item =>{
    console.log(item);
    
 })

// Map percorre e retorna um novo array

const otherCars = cars.map((car)=> car)
console.log(otherCars);

const numbers = [1,2,3,4,5,6]

const novoNumber = numbers.map((n)=> n * 2)
console.log(novoNumber);

 */

const peoples =[
    "Daniel",
    "João",
    "Marcos",
    "Rogério",
    "Cralos",
    "Maria",
    "Carla"
]

const myNamePosition = peoples.find((item)=>item ==="Daniel")
console.log(myNamePosition );

const myNamePositionIndex = peoples.findIndex((item)=> item === "Danie l")
console.log(myNamePositionIndex);
