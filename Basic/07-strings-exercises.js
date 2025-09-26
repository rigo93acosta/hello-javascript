/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let str1 = "Hola, ";
let str2 = "¿cómo estás?";
let resultado = str1 + str2;
console.log(resultado);

// 2. Muestra la longitud de una cadena de texto

console.log(resultado.length);

// 3. Muestra el primer y último carácter de un string

console.log("Primer carácter:", resultado[0]);
console.log("Último carácter:", resultado[resultado.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log("Mayúsculas:", resultado.toUpperCase());
console.log("Minúsculas:", resultado.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let multiLine = `Esta es una cadena
de texto que
se muestra en
varias líneas.`;
console.log(multiLine);

// 6. Interpola el valor de una variable en un string

let myName = "Juan";
let interpolated = `Hola, ${myName}! Bienvenido.`;
console.log(interpolated);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringWithSpaces = "Este es un ejemplo de cadena con espacios.";
let stringWithHyphens = stringWithSpaces.replaceAll(" ", "-");
console.log(stringWithHyphens);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let phrase = "El aprendizaje de JavaScript es divertido.";
let wordToCheck = "JavaScript";
console.log(phrase.includes(wordToCheck) ? 
            `La frase contiene la palabra "${wordToCheck}".` : 
            `La frase no contiene la palabra "${wordToCheck}".`);

// 9. Comprueba si dos strings son iguales

let stringA = "Hola Mundo";
let stringB = "Hola Mundo";
console.log(stringA === stringB ? 
    "Los strings son iguales." : 
    "Los strings son diferentes.");

// 10. Comprueba si dos strings tienen la misma longitud

let stringC = "Hola";
let stringD = "Mundo";
console.log(stringC.length === stringD.length ? 
    "Los strings tienen la misma longitud." : 
    "Los strings tienen diferente longitud.");