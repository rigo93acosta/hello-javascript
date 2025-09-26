/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let sum = 5 + 3;
let rest = 5 - 3;
let mult = 5 * 3;
let div = 5 / 3;
let mod = 5 % 3;
let exp = 5 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let var1 = 10;

var1 += sum;
var1 -= rest;
var1 *= mult;
var1 /= div;
var1 %= mod;
var1 **= exp;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3);
console.log(5 < 10);
console.log(5 >= 5);
console.log(5 <= 10);
console.log(5 == 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3);
console.log(5 > 10);
console.log(5 >= 10);
console.log(5 <= 3);
console.log(5 == 3);

// 5. Utiliza el operador lógico and

console.log(5 > 3 && 15 > 15)

// 6. Utiliza el operador lógico or

console.log(5 > 3 || 15 > 15)

// 7. Combina ambos operadores lógicos

console.log((5 > 3 && 15 > 15) || (10 > 5 && 20 > 15));

// 8. Añade alguna negación

console.log(!((5 > 3 && 15 > 15) || (10 > 5 && 20 > 15)));

// 9. Utiliza el operador ternario

let age = 20
let isAdulto = age >= 18 ? "Adulto" : "Menor";
console.log(isAdulto);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let a = 5;
let b = 10;
let c = 15;

console.log((a + b) > c && (c - b) < a || (a * 2) === b);