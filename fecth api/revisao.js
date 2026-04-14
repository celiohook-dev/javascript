// foreach

/*const numbers = [1,2,3,4,5,6]

numbers.forEach(item =>{
    console.log(item);
    
 })

numbers.reverse()
console.log(numbers);

// Map

const mult = numbers.map ((n)=> n + 2 )
console.log(mult);

const position = numbers.find((item)=> item === 2)
console.log(position);

const position1 = numbers.findIndex((item)=> item === 1)
console.log(`O index é ${position1}`);
*/


const peoples = [
 {
    nome: "Célio",
    idade:19,
    sexo : "Masculino"
 },

  {
    nome: "Edu",
    idade:20,
    sexo : "Masculino"
 },

  {
    nome: "Ana",
    idade:18,
    sexo : "Femenino"
 },

  {
    nome: "Maria",
    idade:21,
    sexo : "femenino"
 }

]

const verifcar = peoples.filter((nome)=> nome === 18)
console.log(verifcar);

