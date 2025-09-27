/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array = [10, 20, 30, 40, 50]
let [first, second] = array
console.log(first)
console.log(second)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [first2, second2, third2 = 100] = [1, 2]
console.log(first2)
console.log(second2)
console.log(third2)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let object = { a: 1, b: 2, c: 3 }
let { a, b } = object
console.log(a)
console.log(b)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { a: x, b: y } = object
console.log(x)
console.log(y)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let nestedObject = {
    prop1: "value1",
    prop2: {
        subProp1: "subValue1",
        subProp2: "subValue2"
    }
}

let { prop2: { subProp1, subProp2 } } = nestedObject
console.log(subProp1)
console.log(subProp2)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let combinedArray = [...array1, ...array2]
console.log(combinedArray)

// 7. Usa propagación para crear una copia de un array

let arrayCopy = [...array1]
console.log(arrayCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let object1 = { a: 1, b: 2 }
let object2 = { c: 3, d: 4 }

let combinedObject = { ...object1, ...object2 }
console.log(combinedObject)

// 9. Usa propagación para crear una copia de un objeto

let objectCopy = { ...object1 }
console.log(objectCopy)

// 10. Combina desestructuración y propagación

let person = {
    name: "Brais",
    age: 37,
    job: {
        title: "Profesor",
        company: "MoureDev"
    }
}
console.log(person)
let { job: { title, company } } = person
let person2 = { ...person, jobTitle: title, jobCompany: company }
console.log(person2)