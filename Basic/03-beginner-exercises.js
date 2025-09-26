/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario

// 2. Escribe un comentario en varias líneas

/* 

Multilínea

*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Rigo"
let myNumber = 28
let myBoolean = true
let myNull = null
let myUndefined = undefined
let mySymbol = Symbol("Rigo")
let myBigInt = 9007199254741991n

// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myNull)
console.log(myUndefined)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Acosta"
myNumber = 35
myBoolean = false
myNull = null
myUndefined = undefined
mySymbol = Symbol("Acosta")
myBigInt = 12345678901234567890n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 100
myNumber = "Cien"
myBoolean = "true"
myNull = "null"
myUndefined = "undefined"
mySymbol = "Symbol"
myBigInt = "BigInt"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConstString = "Constante"
const myConstNumber = 50
const myConstBoolean = true
const myConstNull = null
const myConstUndefined = undefined
const myConstSymbol = Symbol("Constante")
const myConstBigInt = 12345678901234567890n

// 9. A continuación, modifica los valores de las constantes

// myConstString = "Nuevo valor"
// myConstNumber = 100
// myConstBoolean = false
// myConstNull = "null"
// myConstUndefined = "undefined"
// myConstSymbol = Symbol("Nuevo valor")
// myConstBigInt = 98765432109876543210n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Las líneas que producen error están comentadas