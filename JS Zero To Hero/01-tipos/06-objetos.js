// Personaje de TV
let nombre = "Rick Sanchez";
let edad = 70;
let esCientifico = true;

let personaje = {
    nombre: "Rick Sanchez",
    edad: 70,
    esCientifico: true
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.edad);

personaje.edad = 13;

let llave = "edad";
personaje["edad"] = 16;

delete personaje.edad;

console.log(personaje);

