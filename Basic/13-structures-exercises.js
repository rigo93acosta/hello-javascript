/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["perro", "gato", "elefante", "tigre", "leon"]

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("lobo")
animals.push("mono")

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)

// 4. Crea un set que almacene cinco libros

let books = new Set([
    "El Quijote",
    "Cien Años de Soledad",
    "1984",
    "El Señor de los Anillos",
    "La Sombra del Viento",
])

// 5. Añade dos más. Uno de ellos repetido

books.add("Don Juan Tenorio")
books.add("1984")

// 6. Elimina uno concreto a tu elección

books.delete("1984")

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (months.has(5)) {
    console.log(months.get(5))
} else {
    console.log("El mes 5 no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("Verano", ["Junio", "Julio", "Agosto"])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
let setFromArray = new Set(array)
let mapFromSet = new Map()
mapFromSet.set("numeros", setFromArray)