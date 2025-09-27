/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

console.error("Esto es un mensaje de error")

// 2. Crea una función que utilice warn correctamente

console.warn("Esto es un mensaje de advertencia")

// 3. Crea una función que utilice info correctamente

console.info("Esto es un mensaje informativo")

// 4. Utiliza table

const users = [
    { name: "Rigo", edad: "32" },
    { name: "Mary", edad: "37" },
    { name: "Carlos", edad: "54" }
]

console.table(users)

// 5. Utiliza group

console.group("Listado de usuarios")
console.log(users[0].name)
console.log(users[1].name)
console.log(users[2].name)
console.groupEnd()

// 6. Utiliza time

console.time("Array 1000000")
let array = []
for (let i = 0; i < 1000000; i++) {
    array.push(i)
}
console.timeEnd("Array 1000000")

// 7. Valida con assert si un número es positivo

let number = -5
console.assert(number >= 0, "El número es negativo")

// 8. Utiliza count

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0){
        console.countReset("Bucle for")
    }else{
    console.count("Bucle for")
    }
}

// 9. Utiliza trace

function myFunction() {
    console.trace("Trace")
}

myFunction()

// 10. Utiliza clear

// console.clear() 