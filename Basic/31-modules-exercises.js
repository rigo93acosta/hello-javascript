/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function myFunction() {
    console.log("Hola desde mi función")
}

// 2. Exporta una constante

export const myConstant = 3.14

// 3. Exporta una clase

export class MyClass {
    constructor() {
        console.log("Hola desde mi clase")
    }
}

// 4. Importa una función

import { add } from "./28-export-modules.js"
console.log(add(2, 3))

// 5. Importa una constante

import { PI } from "./28-export-modules.js"
console.log(PI)

// 6. Importa una clase

import { Circle } from "./28-export-modules.js"
let circle = new Circle(5)
console.log(circle.area().toFixed(2))

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function multiply(a, b) {
    return a * b
}

// export default const E = 2.718

// export default class MyDefaultClass {
//     constructor() {
//         console.log("Hola desde mi clase por defecto")
//     }
// }

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import defaultMultiply from "./31-modules-exercises.js"
console.log(defaultMultiply(4, 5))

// import defaultE from "./31-modules-exercises.js"
// console.log(defaultE)

// import DefaultMyClass from "./31-modules-exercises.js"
// let myDefaultClass = new DefaultMyClass()

// 9. Exporta una función, una constante y una clase desde una carpeta


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

