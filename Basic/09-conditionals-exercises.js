/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let val = 5
if (val === 5) {
    console.log("Rigo");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "admin"
let password = "1234"

if (user === "admin" && password === "1234") {
    console.log("Usuario y contraseña correctos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if (number > 0) {
    console.log("El número es positivo");
}
else if (number < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log(`No puede votar, le faltan ${18 - edad} años`);
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let isAdulto = edad >= 18 ? "Adulto" : "Menor";
console.log(isAdulto);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 4
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}   

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días");
        break;
    case 2:
        console.log("28 o 29 días");
        break;
    default:
        console.log("Mes no válido");
        break;
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lang = "es"
switch (lang) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    default:
        console.log("Idioma no soportado");
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// Me resulta efectivo emplear el switch del ejercicio 6 para este ejercicio 9

// 10. Usa un switch para hacer de nuevo el ejercicio 7

// Me resulta efectivo emplear el switch del ejercicio 7 para este ejercicio 10